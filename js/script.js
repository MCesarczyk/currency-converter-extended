console.log("liczymy hajsy :]");

let form = document.querySelector(".js-form");
let pln = document.querySelector(".js-pln");
let eur = document.querySelector(".js-eur");
let usd = document.querySelector(".js-usd");
let bgn = document.querySelector(".js-bgn");
let hrk = document.querySelector(".js-hrk");
let ratioEur = document.querySelector(".js-ratioEur");
let ratioUsd = document.querySelector(".js-ratioUsd");
let ratioBgn = document.querySelector(".js-ratioBgn");
let ratioHrk = document.querySelector(".js-ratioHrk");
let result = document.querySelector(".js-result");
let reset = document.querySelector(".js-buttonReset");

pln.focus();

form.addEventListener("submit", (event) => {
    event.preventDefault();
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
    console.log(gain);
})

form.addEventListener("reset", () => {
    result.innerText = "Dziękujemy, zapraszamy ponownie :)";
})


