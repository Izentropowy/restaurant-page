import pastaImg from "/src/assets/images/pasta.png";
import pizzaImg from "/src/assets/images/pizza.png";
import spaghettiImg from "/src/assets/images/spaghetti.png";
import wineImg from "/src/assets/images/wine.png";

function createMenu() {
    const menu = document.createElement('div');
    
    const pasta = createItem(pastaImg, "Pasta", "The best pasta");
    const pizza = createItem(pizzaImg, "Pizza", "The best pizza");
    const spaghetti = createItem(spaghettiImg, "Spaghetti", "The best spaghetti");
    const wine = createItem(wineImg, "Wine", "The best wine");

    menu.append(pasta, pizza, spaghetti, wine);

    return menu
}


function createItem(imgPath, name, description) {
    const item = document.createElement('div');
    const header = document.createElement('h2');
    const paragraph = document.createElement('p');
    const img = document.createElement('img');

    img.src = imgPath;
    header.textContent = name;
    paragraph.textContent = description;
    item.append(img, header, paragraph);

    return item
}


export default createMenu;