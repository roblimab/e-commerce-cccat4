"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shipping {
    constructor(distancia, volume, densidade) {
        this.distancia = distancia;
        this.volume = volume;
        this.densidade = densidade;
    }
    getPrice() {
        const minimunPrice = 10;
        const price = this.distancia * this.volume * (this.densidade / 100);
        return price < minimunPrice ? minimunPrice : price;
    }
}
exports.default = Shipping;
