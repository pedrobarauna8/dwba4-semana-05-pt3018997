
function inserirMenu() {
  fetch('Menu.html')
    .then(response => response.text())
    .then(menuHtml => {
      const menuContainer = document.getElementById('menu_container');
      menuContainer.innerHTML = menuHtml;
    });
}

document.addEventListener('DOMContentLoaded', inserirMenu);