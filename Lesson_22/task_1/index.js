const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const delButton = document.querySelector('.clear-btn')
const removeHand = document.querySelector('.remove-handlers-btn');
const attachHand = document.querySelector('.attach-handlers-btn');

const switchTest = () => {

}

const logTarget = (text, color) => {
    const eventListElem = document.querySelector('.events-list');

    eventListElem.innerHTML += `<span class='test' style='color:${color}; margin-left:8px'>${text}</span>`

}

const del = () => {
    const listItem = document.querySelector('.events-list')
    while (listItem.firstChild) {
        listItem.removeChild(listItem.firstChild);
    }
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const remove = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv, );

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
}

const attach = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv, );

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);

}

attach();

removeHand.addEventListener('click', remove)
attachHand.addEventListener('click', attach)
delButton.addEventListener('click', del);