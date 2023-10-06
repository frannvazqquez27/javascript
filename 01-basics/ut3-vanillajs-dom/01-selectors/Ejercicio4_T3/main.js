function createListItem(text, classes) {
    const LISTITEM = document.createElement('a');
    LISTITEM.href = "#";
    LISTITEM.textContent = text;
    LISTITEM.classList.add('list-group-item', 'list-group-item-action', ...classes);
    return LISTITEM;
}

const body = document.body;
body.classList.add('p-3', 'm-0', 'border-0', 'bd-example');
const LISTGITEM = document.getElementsByClassName('list-group');

for (const LISTGROUP of LISTGITEM) {
    LISTGROUP.appendChild(createListItem('A simple default list group item', []));
    LISTGROUP.appendChild(createListItem('A simple primary list group item', ['list-group-item-primary']));
    LISTGROUP.appendChild(createListItem('A simple secondary list group item', ['list-group-item-secondary']));
    LISTGROUP.appendChild(createListItem('A simple success list group item', ['list-group-item-success']));
    LISTGROUP.appendChild(createListItem('A simple danger list group item', ['list-group-item-danger']));
    LISTGROUP.appendChild(createListItem('A simple warning list group item', ['list-group-item-warning']));
    LISTGROUP.appendChild(createListItem('A simple info list group item', ['list-group-item-info']));
    LISTGROUP.appendChild(createListItem('A simple light list group item', ['list-group-item-light']));
    LISTGROUP.appendChild(createListItem('A simple dark list group item', ['list-group-item-dark']));
}