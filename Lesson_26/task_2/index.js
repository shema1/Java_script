const counter = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const counterChange = e => {
    const isButton = e.target.classList.contains('counter__button');

    if (!isButton) {
        return;
    }
    const action = e.target.dataset.action;

    const oldValue = Number(counterValueElem.textContent)
    const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;
};

counter.addEventListener('click', counterChange);

const onCounterChange = e => {
    counterValueElem.textContent = e.newValue;
}

window.addEventListener('storage', onCounterChange)


const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue')
}


document.addEventListener('DOMContentLoaded', onDocumentLoaded)