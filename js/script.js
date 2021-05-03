{
    const welcome = () => {
        console.log("Hello, programmer! Have a nice day :)");
    };

    const calculate = (event) => {
        event.preventDefault();
        const pln = document.querySelector(".js-pln");
        const eur = document.querySelector(".js-eur");
        const usd = document.querySelector(".js-usd");
        const bgn = document.querySelector(".js-bgn");
        const hrk = document.querySelector(".js-hrk");
        pln.focus();
        let ratioEur = document.querySelector(".js-ratioEur");
        let ratioUsd = document.querySelector(".js-ratioUsd");
        let ratioBgn = document.querySelector(".js-ratioBgn");
        let ratioHrk = document.querySelector(".js-ratioHrk");
        let result = document.querySelector(".js-result");
        let gain;
        let currency;
        if (eur.checked === true) {
            gain = pln.value / ratioEur.value;
            currency = " EUR";
        } else if (usd.checked === true) {
            gain = pln.value / ratioUsd.value;
            currency = " USD";
        } else if (bgn.checked === true) {
            gain = pln.value / ratioBgn.value;
            currency = " BGN";
        } else if (hrk.checked === true) {
            gain = pln.value / ratioHrk.value;
            currency = " HRK";
        } else {
            result.value = "bida panie ..."
        };
        result.innerText = "Uzyskana kwota: " + gain.toFixed(2) + currency;
    }

    const formReset = () => {
        let result = document.querySelector(".js-result");
        result.innerText = "Dziękujemy, zapraszamy ponownie :)";
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("reset", formReset);
        form.addEventListener("submit", calculate);
    };

    welcome();
    init();

}