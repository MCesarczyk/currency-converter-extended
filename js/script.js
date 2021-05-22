{
    const welcome = () => {
        console.log("Hello, programmer! Have a nice day :)");
    };

    const result = document.querySelector(".js-result");

    const checkCurrency = () => {
        return checkedCurrency = document.querySelector(".js-radio:checked");
    };

    const checkCurrencyRatio = () => {
        const ratioEur = document.querySelector(".js-ratioEur").value;
        const ratioUsd = document.querySelector(".js-ratioUsd").value;
        const ratioAud = document.querySelector(".js-ratioAud").value;
        const ratioBgn = document.querySelector(".js-ratioBgn").value;
        const ratioHrk = document.querySelector(".js-ratioHrk").value;
        checkCurrency();
        switch (checkedCurrency.value) {
            case "EUR":
                return chosenCurrencyRatio = ratioEur;
            case "USD":
                return chosenCurrencyRatio = ratioUsd;
            case "AUD":
                return chosenCurrencyRatio = ratioAud;
            case "BGN":
                return chosenCurrencyRatio = ratioBgn;
            case "HRK":
                return chosenCurrencyRatio = ratioHrk;
        };
    };

    const calculateAmount = () => {
        const inputPln = document.querySelector(".js-pln").value;
        return gain = inputPln / chosenCurrencyRatio;
    };

    const printResult = () => {
        checkCurrency();
        checkCurrencyRatio();
        calculateAmount();
        result.innerText = `Uzyskana kwota: ${gain.toFixed(2)} ${checkedCurrency.value}`;
    };

    const formReset = () => {
        result.innerText = "Dziękujemy, zapraszamy ponownie :)";
    };

    const init = () => {
        welcome();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            printResult();
        });
        form.addEventListener("reset", formReset);
    };

    init();

}