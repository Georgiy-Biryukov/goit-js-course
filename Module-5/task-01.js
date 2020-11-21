"use strict";

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(`login: ${this.login}, email: ${this.email}`);
};

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo();

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();