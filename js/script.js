{


    const calculateResult = (amount, currency) => {
        const EUR = 4.56;
        const USD = 4.30;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;
        }
    }
    
    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(result);

    }
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }
    
    init();
}


