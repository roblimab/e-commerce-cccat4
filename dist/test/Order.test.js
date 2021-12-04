"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
/*
1 - Não deve fazer um pedido com cpf inválido
2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)
*/
test('Não deve fazer um pedido com cpf inválido', function () {
    const cpf = '111.111.111-11';
    expect(() => new Order_1.default(cpf)).toThrow(new Error("Invalid cpf"));
});
test('Deve fazer um pedido com 3 itens', function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, 'Item A', 50), 3);
    order.addItem(new Item_1.default(2, 'Item B', 150), 1);
    order.addItem(new Item_1.default(3, 'Item C', 7), 10);
    const total = order.getTotal();
    expect(total).toBe(370);
});
test('Deve fazer um pedido com cupom de desconto', function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(new Item_1.default(1, 'Item A', 50), 3);
    order.addItem(new Item_1.default(2, 'Item B', 150), 1);
    order.addItem(new Item_1.default(3, 'Item C', 7), 10);
    order.addCoupon(new Coupon_1.default('10PERCENT', 10));
    const total = order.getTotal();
    expect(total).toBe(333);
});
