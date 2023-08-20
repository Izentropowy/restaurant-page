function createHeader() {
    const header = document.createElement('header');
    const restaurantName = document.createElement('h2');

    restaurantName.textContent = "Italiana";
    header.appendChild(restaurantName);

    header.appendChild(createNav());
    
    return header
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function createMain() {

}

function createFooter() {

}

function setActivePage() {

}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
}

export default initializeWebsite;