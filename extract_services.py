import re
from bs4 import BeautifulSoup

with open('services/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

app_div = soup.find('div', id='app')
if app_div:
    header = app_div.find('header')
    if header: header.decompose()
    
    mobile_menu = app_div.find('div', class_='mobile_menu_wrap')
    if mobile_menu: mobile_menu.decompose()
    
    footer = app_div.find('footer')
    if footer: footer.decompose()
    
    # remove modals or popups if they are site-wide like showreel
    showreel = soup.find('div', id='showreel')
    if showreel: showreel.decompose()

    # remove <script> and <style>
    for script in app_div(["script", "style", "noscript"]):
        script.decompose()

    # Also remove cursor wrap or gam if any
    for cursor in app_div.find_all('div', class_='cursor_wrap'):
        cursor.decompose()
    for gam in app_div.find_all('div', class_='gam'):
        gam.decompose()

    html_str = str(app_div)

    # replace class= with className=
    html_str = html_str.replace('class=', 'className=')
    # replace for= with htmlFor=
    html_str = html_str.replace('for=', 'htmlFor=')
    # replace tabindex= with tabIndex=
    html_str = html_str.replace('tabindex=', 'tabIndex=')
    # replace autocomplete= with autoComplete=
    html_str = html_str.replace('autocomplete=', 'autoComplete=')
    # replace maxlength= with maxLength=
    html_str = html_str.replace('maxlength=', 'maxLength=')
    # replace readonly= with readOnly=
    html_str = html_str.replace('readonly=', 'readOnly=')

    # Fix unclosed input tags
    html_str = re.sub(r'<input([^>]+)(?<!/)>', r'<input\1 />', html_str)
    # Fix unclosed img tags
    html_str = re.sub(r'<img([^>]+)(?<!/)>', r'<img\1 />', html_str)
    # Fix unclosed br tags
    html_str = re.sub(r'<br([^>]*)>', r'<br\1 />', html_str)
    # Fix unclosed hr tags
    html_str = re.sub(r'<hr([^>]*)>', r'<hr\1 />', html_str)
    
    # Fix source tags
    html_str = re.sub(r'<source([^>]+)(?<!/)>', r'<source\1 />', html_str)

    # Fix some inline styles like style="aspect-ratio: 1.5; " -> style={{ aspectRatio: 1.5 }}
    # This might be tricky, so we'll just replace style="..." with a simple regex for aspect ratio if it exists, or just strip styles
    # Actually, the quickest is to just remove style tags since they cause issues, and let css handle it
    # But wait, next.js supports style={{}} so let's see. Most styles in this site are simple.
    def style_replacer(match):
        style_content = match.group(1)
        # simplistic conversion
        style_content = style_content.replace('aspect-ratio:', 'aspectRatio:').replace(';', '')
        parts = style_content.split(':')
        if len(parts) == 2:
            return f'style={{{{{parts[0].strip()}: "{parts[1].strip()}"}}}}}'
        return 'style={{}}'
    
    html_str = re.sub(r'style="([^"]*)"', style_replacer, html_str)

    # viewBox
    html_str = html_str.replace('viewbox=', 'viewBox=')
    html_str = html_str.replace('stroke-width=', 'strokeWidth=')
    html_str = html_str.replace('stroke-linecap=', 'strokeLinecap=')
    html_str = html_str.replace('stroke-linejoin=', 'strokeLinejoin=')
    html_str = html_str.replace('fill-rule=', 'fillRule=')
    html_str = html_str.replace('clip-rule=', 'clipRule=')

    # remove comments
    html_str = re.sub(r'<!--(.*?)-->', '', html_str, flags=re.DOTALL)

    with open('services_main_content.tsx', 'w', encoding='utf-8') as f:
        f.write('export default function ServicesPage() {\n  return (\n    <>\n')
        f.write(html_str)
        f.write('\n    </>\n  );\n}\n')
    print("Extracted content successfully.")
else:
    print("Could not find div#app")
