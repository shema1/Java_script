const task = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: true },
    { text: 'Visit doctor', done: false },
    { text: 'Buy meat', done: true },
]

const rederListItem = listItem => {

    const listElement = document.querySelector('.list');
    const listItemElements = listItem
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li')
            listItemElem.classList.add('list__item');
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox')
            checkboxElem.checked = done;
            if (done) listItemElem.classList.add('list__item_done')
            checkboxElem.classList.add('list__item-checkbox')
            listItemElem.append(checkboxElem, text)
            return listItemElem
        });

    listElement.append(...listItemElements)
}


rederListItem(task);