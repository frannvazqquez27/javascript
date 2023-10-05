document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const br1 = document.createElement('br');
    const p = document.createElement('p');
    const br2 = document.createElement('br');
    const form = document.createElement('form');
    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    const br3 = document.createElement('br');
    const br4 = document.createElement('br');
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    const br5 = document.createElement('br');
    const br6 = document.createElement('br');
    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    const br7 = document.createElement('br');
    const br8 = document.createElement('br');
    const inputSubmit = document.createElement('input');

    label1.setAttribute('for', 'datemax');
    input1.setAttribute('type', 'date');
    input1.setAttribute('id', 'datemax');
    input1.setAttribute('name', 'datemax');
    input1.setAttribute('max', '1979-12-31');

    label2.setAttribute('for', 'datemin');
    input2.setAttribute('type', 'date');
    input2.setAttribute('id', 'datemin');
    input2.setAttribute('name', 'datemin');
    input2.setAttribute('max', '2000-01-02');

    label3.setAttribute('for', 'quantity');
    input3.setAttribute('type', 'number');
    input3.setAttribute('id', 'quantity');
    input3.setAttribute('name', 'quantity');
    input3.setAttribute('min', '1');
    input3.setAttribute('max', '5');

    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Submit');

    h1.textContent = "The input min and max attributes";
    p.textContent = "The min and max attributes specify the minimum and maximum values for an input element.";
    label1.textContent = "Enter a date before 1980-01-01:";
    label2.textContent = "Enter a date after 2000-01-01:";
    label3.textContent = "Quantity (between 1 and 5):";

    div.appendChild(h1);
    div.appendChild(br1);
    div.appendChild(p);
    div.appendChild(br2);
    div.appendChild(form);

    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(br3);
    form.appendChild(br4);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(br5);
    form.appendChild(br6);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(br7);
    form.appendChild(br8);
    form.appendChild(inputSubmit);

    body.appendChild(div);
});