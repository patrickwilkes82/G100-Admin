//Toggle SideMenu Bar Class when clicking Arrow Button

function toggleMenu() {
    const menuSize = document.getElementById('wrapper');
    menuSize.classList.toggle('active');
}

function toggleConfig() {
    const showConfigMenu = document.getElementById('config_menu');
    let configButton = document.getElementById('configButton');

    showConfigMenu.classList.toggle('open');
    configButton.classList.toggle ('open');
    closeNotifications();
}

function closeConfigMenu() {
    const closeConfigMenu = document.getElementById('config_menu');
    let configButton = document.getElementById('configButton');

    closeConfigMenu.classList.remove('open');
    configButton.classList.remove('open');
}

function toggleNotifications() {
    const showNotificationMenu = document.getElementById('notification_menu');
    let notificationButton = document.getElementById('notificationButton');

    showNotificationMenu.classList.toggle('open');
    notificationButton.classList.toggle('open');
    closeConfigMenu();
}

function closeNotifications() {
    const closeNotificationsMenu = document.getElementById('notification_menu');
    let notificationButton = document.getElementById('notificationButton');

    closeNotificationsMenu.classList.remove('open');
    notificationButton.classList.remove('open');
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeConfigMenu();
        closeNotifications();
    }
};