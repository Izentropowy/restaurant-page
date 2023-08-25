import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

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

    homeButton.onclick = () => setActivePage(createHome());
    menuButton.onclick = () => setActivePage(createMenu());
    contactButton.onclick = () => setActivePage(createContact());

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function createMain() {
    const main = document.createElement('main');

    return main
}

function createFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('h4');

    copyright.textContent = "Copyright © Izentropowy";
    footer.appendChild(copyright);

    return footer
}

function setActivePage(page) {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(page);
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActivePage(createHome());
}

export default initializeWebsite;