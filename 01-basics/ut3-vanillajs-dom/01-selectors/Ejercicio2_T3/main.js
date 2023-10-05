document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const p2 = document.createElement("p");

    img.setAttribute('src', './assests/img_la.jpg');
    img.setAttribute('alt', 'LA');
    h1.textContent = 'This is a Heading';
    p.textContent = 'This is a paragraph';
    p2.textContent = 'This is a another paragraph';

    body.append(img, h1. p, p2);
});