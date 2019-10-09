//Toggle SideMenu Bar Class when clicking Arrow Button

function toggleMenu() {
    const menuSize = document.getElementById('wrapper');
    menuSize.classList.toggle('active');
}

function toggleConfig() {
    const showConfigMenu = document.getElementById('config_menu');
    let configButton = document.getElementById('configButton');
    let wrapperOpacity = document.getElementById('wrapper');
    showConfigMenu.classList.toggle('open');
    configButton.classList.toggle ('open');
}

function closeConfigMenu() {
    const closeConfigMenu = document.getElementById('config_menu');
    let configButton = document.getElementById('configButton');
    closeConfigMenu.classList.remove('open');
    configButton.classList.remove('open');
}