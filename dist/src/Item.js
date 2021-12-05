"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(idItem, description, price, altura, largura, profundidade, peso) {
        this.idItem = idItem;
        this.description = description;
        this.price = price;
        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
        this.peso = peso;
    }
    getVolume() {
        return (this.altura * this.largura * this.profundidade) / 1000000;
    }
    getDensidade() {
        return Math.trunc(this.peso / this.getVolume());
    }
}
exports.default = Item;
