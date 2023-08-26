function createMenu() {
    const menu = document.createElement('div');
    
    const pasta = createItem("Pasta", "The best pasta");
    const pizza = createItem("Pizza", "The best pizza");
    const spaghetti = createItem("Spaghetti", "The best spaghetti");
    const wine = createItem("Wine", "The best wine");

    menu.append(pasta, pizza, spaghetti, wine);

    return menu
}


function createItem(name, description) {
    const item = document.createElement('div');
    const header = document.createElement('h2');
    const paragraph = document.createElement('p');
    const img = document.createElement('img');

    img.src = `/src/assets/images/${name.toLowerCase()}.png`;
    header.textContent = name;
    paragraph.textContent = description;
    item.append(img, header, paragraph);

    return item
}


export default createMenu;