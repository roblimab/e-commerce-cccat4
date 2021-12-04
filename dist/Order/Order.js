"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(item, discount, cpf) {
        this.item = item;
        this.discount = discount;
        this.cpf = cpf;
    }
    calculateTotalPrice(discount) {
        const { price, amount } = this.item;
        const subTotal = price * amount;
        if (discount && discount > 0) {
            return subTotal - subTotal * (discount / 100);
        }
        return subTotal;
    }
}
exports.default = Order;
