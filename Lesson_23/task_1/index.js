const emailInputElem = document.querySelector('#email');
const passwordInputEmail = document.querySelector('#password');
const emailErorrElem = document.querySelector('.error-text_email');
const passwordErorrElem = document.querySelector('.error-text_password');

const isRequired = value => value ?
    undefined :
    'Required';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';


const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired]
}
const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}

const onEmailChange = event => {
    const errorText = validate('email', event.target.value)
    emailErorrElem.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value)
    passwordErorrElem.textContent = errorText;
}


emailInputElem.addEventListener('input', onEmailChange);
passwordInputEmail.addEventListener('input', onPasswordChange);


const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    alert(JSON.stringify(formData));
};
formElem.addEventListener('submit', onFormSubmit)