import re
from bs4 import BeautifulSoup

with open('career/index.html', 'r', encoding='utf-8') as f:
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
    
    # write the content to a file
    with open('career_main_content.html', 'w', encoding='utf-8') as f:
        f.write(str(app_div))
    print("Extracted content successfully.")
else:
    print("Could not find div#app")
