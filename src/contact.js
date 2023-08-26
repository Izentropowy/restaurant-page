function createContact() {
    const contact = document.createElement('div');
    const subDiv = document.createElement('div');
    const header = document.createElement('h1');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    header.textContent = "Contact us";
    paragraph1.textContent = "Piazza del Colosseo, 1, 00184 Roma RM";
    paragraph2.textContent = "+01 234 567 890";
    const img = document.createElement('img');
    img.src = "/src/assets/images/contact-us.png";

    contact.append(subDiv);
    subDiv.append(header, paragraph1, paragraph2, img);

    return contact
}

export default createContact;