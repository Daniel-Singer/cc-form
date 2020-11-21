'use strict';


const UI = (() => {

    const UIElements = {

        // credit card display elements

        logoDisplay: '#logo-display',
        numberDisplay: '#number-display',
        validDisplay: '#valid-display',
        nameDisplay: '#name-display',

        // form input elements

        inputVisa: '#visa',
        inputMasterCard: '#master-card',
        numberInput: '.number',

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
        //  console.log(number.id)
        })
        


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
            document.querySelector(`#input-number-${targetIndex}`).focus();
        }

    }

    return {
        init: () => {
            console.log('app conected')

            loadEventListeners()
        }
    }

})(UI);

App.init();