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
        inputMasterCard: '#master-card'

    }

    return {
        getUIElements: () => {
            return UIElements;
        }
    }

})();

const App = ((UI) => {

    const Elements = UI.getUIElements();

    const loadEventListeners = () => {

        // change card type buttons

        document.querySelector(Elements.inputVisa).addEventListener('change', updateLogoDisplay);

        document.querySelector(Elements.inputMasterCard).addEventListener('change', updateLogoDisplay);



    }

    const updateLogoDisplay = (e) => {

        e.preventDefault();

        if(e.target.id === 'visa'){
            document.querySelector(Elements.logoDisplay).innerHTML = '<i class="fab fa-cc-visa">';
        } else {
            document.querySelector(Elements.logoDisplay).innerHTML = '<i class="fab fa-cc-mastercard"></i>';

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