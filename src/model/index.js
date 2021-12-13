import { KEY } from './constants.js';

export default class Model {
  makeProduct(name, price, quantity) {
    return {
      name,
      price: parseInt(price),
      quantity: parseInt(quantity),
    };
  }

  setProducts(value) {
    localStorage.setItem(KEY.product, JSON.stringify(value));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem(KEY.product)) || [];
  }

  makeVendingMachine(change) {
    return {
      change,
      coins: [
        { coin: 500, quantity: 0 },
        { coin: 100, quantity: 0 },
        { coin: 50, quantity: 0 },
        { coin: 10, quantity: 0 },
      ],
    };
  }

  setVendingMachine(value) {
    localStorage.setItem(KEY.vending, JSON.stringify(value));
  }

  getVendingMachine() {
    return JSON.parse(localStorage.getItem(KEY.vending));
  }

  setCharge(value) {
    localStorage.setItem(KEY.charge, JSON.stringify(value));
  }

  getCharge() {
    return JSON.parse(localStorage.getItem(KEY.charge));
  }
}