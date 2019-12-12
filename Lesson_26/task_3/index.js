const btnAdd = document.querySelector('.create-task-btn');
const btnCheck = document.querySelector('.create-task-btn')
const chBox = document.querySelector('.list')

let task = JSON.parse(localStorage.getItem('items'));


const rederListItem = listItem => {

    const listElement = document.querySelector('.list');
    listElement.innerHTML = '';
    const listItemElements = listItem
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => b.dataCheck - a.dataCheck)
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
        id: task.length + 1,
        text: inputValue.value,
        done: false,
        date: new Date(),
    })
    localStorage.setItem('items', JSON.stringify(task))
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
    element.dataCheck = element.done ? new Date() : undefined;
    console.log(target)

    localStorage.setItem('items', JSON.stringify(task))

    rederListItem(task);

}

rederListItem(task);
btnCheck.addEventListener('click', add)
chBox.addEventListener('click', check);