"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const quantity = prompt("Какое количество дроидов вы хотите купить?");

if (quantity === null) {
    alert ("Отменено пользователем!")
} else {
    const totalPrice = pricePerDroid * quantity;
    if (totalPrice <= credits) {
        alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    } else {
        alert("Недостаточно средств на счету!");
    };
};