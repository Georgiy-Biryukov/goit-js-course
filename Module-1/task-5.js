"use strict";

const country = prompt("Укажите страну доставки");
const isChina = 'китай';
const isChile = 'чили';
const isAustralia = 'австралия';
const isIndia = 'индия';
const isJamaica = 'ямайка';
const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;


if (country == null) {
    alert("Отменено пользователем!")
} else {
    switch (country.toLowerCase()) {
        case isChina:
            console.log(`Доставка в ${country.toLowerCase()} будет стоить ${deliveryToChina} кредитов`);
            break;
        case isChile:
            console.log(`Доставка в ${country.toLowerCase()} будет стоить ${deliveryToChile} кредитов`);
            break;
        case isAustralia:
            console.log(`Доставка в ${country.toLowerCase()} будет стоить ${deliveryToAustralia} кредитов`);
            break;
        case isIndia:
            console.log(`Доставка в ${country.toLowerCase()} будет стоить ${deliveryToIndia} кредитов`);
            break;
        case isJamaica:
            console.log(`Доставка в ${country.toLowerCase()} будет стоить ${deliveryToJamaica} кредитов`);
            break;
        default:
            alert("В вашей стране доставка недоступна");
    }
};