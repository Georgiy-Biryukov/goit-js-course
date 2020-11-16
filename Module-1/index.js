//задание номер 1
let Name = 'генератор защитного поля';
let Price = 1000;
console.log('Выбран',Name);
console.log('Цена за штуку',Price, 'грн');
price = 2000;
console.log('Цена за штуку',Price, 'грн');

// задание номер 2

let total = 100
let ordered = 80

if (ordered > total) {
    console.log('На складе недостаточно товаров!')
}
else if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер')
}

//задание номер 3

let message;

var var1 = 'string';

if (true) {
    var var1 = 10;
    console.log(var1);
}

// 3 задание дз

const ADMIN_PASSWORD = 'boom';
let message;
const result = prompt('Введите пароль');
if (result === ADMIN_PASSWORD) {
    let message ='добро пожаловать';
    console.log(message);
}else if  (message ='пароль введен неверно'){
    console.log(message);
} else if (result === null) {
    message = "пароль не веден",
    console.log(message);
}


// 4 задание дз

let credits = 23580;
let pricePerDroid = 3000;
let result = prompt("ведите сумму");
let totalPrice;
let totalResult;

Number(result)


if(result===null) {
    console.log("otmena");
}else {
    totalPrice = pricePerDroid * +result;
    console.log(totalPrice);
}
totalResult = credits - totalPrice;

if(totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
}else{
    console.log(`Вы купили ${result} дроидов, на счету осталось ${totalResult} кредитов.`);
}



// 5 задание

let result = prompt("в какуюстрану хочешь сделать доставку?").toLowerCase();
if(result === "китай") {
    console.log("fnshfhjb");
}else{
    console.log("такой страны нет")
}




// 6 задание

let client = "";
let total;

client = prompt("Ведите число");
total
if(client = Number) {
    total +=client
}
if(client = null) ;

console.log(total);

// задача: написать функцию,которая принимает на вход строку
// и на выходе будет возвращать строку,где буквы на четных позициях будут большие,а на нечетных маленькие
// вход: Some string
// выход sOmE SrRiNg

// 1. обьявить функцию с пустыми телом
// 2.Обьявить аргумент для строки
// 3.создать переменную,в которой будет модифицированная строка
// 4.перебрать строку в цикле
// 5.сделать проверку на четность индекса

const transformString = (string) => {
    let resultString = "";
    let index = 0;

    while (index < string.length) {
        if (index % 2 === 0) {
            resultString += string[index].toUpperCase();
        } else {
            resultString += string[index].toLowerCase();
        }
        
        index++;

    }
    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            resultString += string[i].toUpperCase();

        }else {
            resultString += string[i].toLowerCase();
        }
    }

    return resultString;
}

console.log(transformString('Some string'));
console.log(transformString('Ukraine'));
