function createHome() {
    const home = document.createElement('div');
    const about = document.createElement('div');
    const hours = document.createElement('div');
    const localization = document.createElement('div');

    home.append(about, hours, localization);
    
    about.appendChild(createHeader("About Us"));
    about.appendChild(createParagraph("We wake up every morning to make fresh dough from scratch, and with a recipe that's over 40 years old. So yeah, we've been making it like this for a while now. Our grandparents made it this way, our parents made it this way, so there is no chance we are making it any other way. Order online or visit us!"));

    hours.appendChild(createHeader("Hours"));
    hours.appendChild(createParagraph("Monday: 6am - 6pm"));
    hours.appendChild(createParagraph("Tuesday: 6am - 6pm"));
    hours.appendChild(createParagraph("Wednesday: 6am - 6pm"));
    hours.appendChild(createParagraph("Thursday: 6am - 6pm"));
    hours.appendChild(createParagraph("Friday: 6am - 10pm"));
    hours.appendChild(createParagraph("Saturday: 6am - 10pm"));
    hours.appendChild(createParagraph("Sunday: 6am - 10pm"));

    localization.appendChild(createHeader("Localization"));
    const map = createParagraph();
    const img = document.createElement("img");
    img.src = "/src/assets/images/rome.png";
    localization.appendChild(img);

    return home
}

function createHeader(text) {
    const header = document.createElement('h1');
    header.textContent = text;

    return header
}

function createParagraph(text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text;

    return paragraph
}

export default createHome;