import os

base_dir = '/home/gowtham/Downloads/next_version'
src_comp = os.path.join(base_dir, 'components/sections/SaasPage.tsx')
src_route = os.path.join(base_dir, 'app/saas/page.tsx')

pages = [
    {'name': 'Healthcare', 'path': 'healthcare', 'exact': 'Healthcare', 'lower': 'healthcare', 'upper': 'HEALTHCARE'},
    {'name': 'Edtech', 'path': 'edtech', 'exact': 'Edtech', 'lower': 'edtech', 'upper': 'EDTECH'},
]

with open(src_comp, 'r') as f:
    comp_content = f.read()

with open(src_route, 'r') as f:
    route_content = f.read()

for p in pages:
    new_comp = comp_content.replace('SaasPage', f"{p['name']}Page")
    new_comp = new_comp.replace('SaaS', p['exact'])
    new_comp = new_comp.replace('saas', p['lower'])
    new_comp = new_comp.replace('SAAS', p['upper'])

    comp_path = os.path.join(base_dir, f"components/sections/{p['name']}Page.tsx")
    with open(comp_path, 'w') as f:
        f.write(new_comp)

    route_dir = os.path.join(base_dir, f"app/{p['path']}")
    os.makedirs(route_dir, exist_ok=True)
    
    new_route = route_content.replace('SaasPage', f"{p['name']}Page")
    new_route = new_route.replace('SaasRoute', f"{p['name']}Route")
    new_route = new_route.replace('saas', p['lower'])
    new_route = new_route.replace('SaaS', p['exact'])
    # Remove copySaasAssets line
    new_route = "\n".join([line for line in new_route.split("\n") if "copySaasAssets" not in line])
    
    route_path = os.path.join(route_dir, 'page.tsx')
    with open(route_path, 'w') as f:
        f.write(new_route)

print("Pages created successfully!")
