'use strict';


const UI = (() => {

    const UIElements = {

        creditCard: '.credit-card',

        // credit card display elements

        logoDisplay: '#logo-display',
        numberDisplay: '#number-display',
        validDisplay: '#valid-display',
        nameDisplay: '#name-display',
        cardOwner: '#card-owner',

        // form input elements

        inputVisa: '#visa',
        inputMasterCard: '#master-card',
        numberInput: '.number',
        submitBtn: '#submit-btn',
        numberInputField: '#number-input',
        nameInput: '#owner-input',
        ownerInputField: '#card-owner-input'

    }

    return {
        getUIElements: () => {
            return UIElements;
        }
    }

})();

const App = ((UI) => {

    const Elements = UI.getUIElements();

    const numbers = Array.from(document.querySelectorAll(Elements.numberInput));


    const loadEventListeners = () => {

        // change card type buttons

        document.querySelector(Elements.inputVisa).addEventListener('change', updateLogoDisplay);

        document.querySelector(Elements.inputMasterCard).addEventListener('change', updateLogoDisplay);

        // change number display on card

        numbers.forEach((number) => {
            document.querySelector(`#${number.id}`).addEventListener('keyup', updateNumberDisplay);
        })

        // change name display on card

        document.querySelector(Elements.nameInput).addEventListener('keyup', updateNameDisplay);
        
        // submit form

        document.querySelector(Elements.submitBtn).addEventListener('click', submitForm);


    }

    const updateLogoDisplay = (e) => {

        e.preventDefault();

        if(e.target.id === 'visa'){
            document.querySelector(Elements.logoDisplay).innerHTML = '<i class="fab fa-cc-visa">';
        } else {
            document.querySelector(Elements.logoDisplay).innerHTML = '<i class="fab fa-cc-mastercard"></i>';

        }

    }



    let targetIndex = 0;

    const updateNumberDisplay = (e) => {
        
        e.preventDefault();

        let value = e.target.value;

        let inputLength = e.target.value.length;

        let index = e.target.id.charAt(13);

        let numberDisplay = document.querySelector(`#number-${index}`);

        if(inputLength === 1){
            numberDisplay.textContent = `000${value}`;
        }
        if(inputLength === 2){
            numberDisplay.textContent = `00${value}`;
        }
        if(inputLength === 3){
            numberDisplay.textContent = `0${value}`;
        }
        if(inputLength === 4){
            numberDisplay.textContent = value;
            targetIndex++;
            if(targetIndex !== 4){
                document.querySelector(`#input-number-${targetIndex}`).focus();
            } else {
                document.querySelector(`#input-number-${targetIndex -1 }`).blur();
                targetIndex = 0;
            }
            
        }
        


    }

    const updateNameDisplay = (e) => {

        e.preventDefault();

        let name = e.target.value;

        let nameDisplay = document.querySelector(Elements.cardOwner);

        nameDisplay.textContent = name;

    }

    const submitForm = (e) => {

        e.preventDefault();

        // check if card number is empty

        const numberFields = Array.from(document.querySelectorAll(Elements.numberInput));

        const inputField = document.querySelector(Elements.numberInputField);

        const nameField = document.querySelector(Elements.nameInput);

        const ownerInputField = document.querySelector(Elements.ownerInputField);

        if(numberFields[0].value === '' || numberFields[1].value === '' || numberFields[2].value === '' || numberFields[3].value === ''){
            inputField.style.boxShadow = 'inset 2px 2px red, inset -2px -2px red';
            setTimeout(() => {
                inputField.style.boxShadow = 'none';
            },3000)
        }

        if(nameField.value === ''){
            ownerInputField.style.boxShadow = 'inset 2px 2px red, inset -2px -2px red';
            setTimeout(() => {
                ownerInputField.style.boxShadow = 'none';
            },3000)
        }

        document.querySelector(Elements.creditCard).classList.add('card-fly-away');
        
    }

    return {
        init: () => {

            console.log('app conected')

            loadEventListeners();

        }
    }

})(UI);

App.init();