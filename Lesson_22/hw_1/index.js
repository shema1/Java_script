const btnAdd = document.querySelector('.create-task-btn');
const btnCheck = document.querySelector('.create-task-btn')
const chBox = document.querySelector('.list')

const task = [
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Pick up Tom from airport', done: false },
    { id: 3, text: 'Visit party', done: false },
    { id: 4, text: 'Visit doctor', done: true },
    { id: 5, text: 'Buy meat', done: true },
]


const rederListItem = listItem => {

    const listElement = document.querySelector('.list');
    listElement.innerHTML = '';
    const listItemElements = listItem
        .sort((a, b) => a.done - b.done)
        .map(({ id, text, done }) => {
            const listItemElem = document.createElement('li')
            listItemElem.classList.add('list__item');
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox')
            checkboxElem.checked = done;
            listItemElem.setAttribute('id', `${id}`);
            if (done) listItemElem.classList.add('list__item_done')
            checkboxElem.classList.add('list__item-checkbox')
            listItemElem.append(checkboxElem, text)
            return listItemElem
        });

    listElement.append(...listItemElements)
}


const add = () => {
    let inputValue = document.querySelector('.task-input')
    task.push({
        text: inputValue.value,
        done: false
    })
    inputValue.value = '';
    rederListItem(task);
}


const check = (event) => {
    let target = event.target
    if (target.tagName != 'INPUT') {
        console.log('не туда тикнув ')
        return
    };

    let element = task.find(elemId => elemId.id === +target.parentElement.id);
    element.done = target.checked;
    console.log(target)
    rederListItem(task);

}

rederListItem(task);
btnCheck.addEventListener('click', add)
chBox.addEventListener('click', check);