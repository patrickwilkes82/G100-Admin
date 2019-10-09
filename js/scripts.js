//Toggle SideMenu Bar Class when clicking Arrow Button

function toggleMenu() {
    const menuSize = document.getElementById('wrapper');
    menuSize.classList.toggle('active');
    console.log('class toggled');
}

function toggleConfig() {
    const showConfigMenu = document.getElementById('config_menu');
    showConfigMenu.classList.toggle('open');
    console.log('config menu toggled');
}

function closeConfigMenu() {
    const closeConfigMenu = document.getElementById('config_menu');
    closeConfigMenu.classList.remove('open');
    console.log('all menus closed hopefully');
}