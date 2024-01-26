/* eslint-disable no-console */
const readlineSync = require('readline-sync');

const calculator = {
  read() {
    this.a = readlineSync.question('Введите значение а: '); this.b = readlineSync.question('Введите значение b: ');
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log('Сумма значений:', calculator.sum()); console.log('Произведение значений:', calculator.mul());
