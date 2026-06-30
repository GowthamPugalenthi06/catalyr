#!/bin/bash
mkdir -p /home/gowtham/Downloads/next_version/public/stock

declare -A IMAGES=(
  ["discover.jpg"]="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
  ["strategise.jpg"]="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85"
  ["design.jpg"]="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85"
  ["build.jpg"]="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
  ["launch.jpg"]="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85"
  ["scale.jpg"]="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
  ["saas-dev.jpg"]="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
  ["web-dev.jpg"]="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
  ["mobile-dev.jpg"]="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85"
  ["mvp-dev.jpg"]="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85"
  ["ai-solutions.jpg"]="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85"
  ["automation.jpg"]="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85"
  ["seo.jpg"]="https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=1200&q=85"
  ["outreach.jpg"]="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=85"
  ["brand.jpg"]="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
  ["saas-hero.jpg"]="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=85"
  ["healthcare-hero.jpg"]="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
  ["edtech-hero.jpg"]="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=85"
  ["ecommerce-hero.jpg"]="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85"
  ["realestate-hero.jpg"]="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85"
  ["logistics-hero.jpg"]="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
  ["blog-seo.jpg"]="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=85"
  ["blog-seo-2.jpg"]="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=85"
  ["team-work.jpg"]="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
  ["digital-marketing.jpg"]="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
  ["product-strategy.jpg"]="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=85"
)

for filename in "${!IMAGES[@]}"; do
  url="${IMAGES[$filename]}"
  target="/home/gowtham/Downloads/next_version/public/stock/$filename"
  if [ ! -f "$target" ]; then
    echo "Downloading $filename..."
    curl -L -o "$target" "$url" --silent --show-error
    echo "  Done: $filename"
  else
    echo "  Already exists: $filename"
  fi
done

echo "All images downloaded!"
ls -la /home/gowtham/Downloads/next_version/public/stock/
