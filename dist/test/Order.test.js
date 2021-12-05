"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../src/Coupon"));
const Item_1 = __importDefault(require("../src/Item"));
const Order_1 = __importDefault(require("../src/Order"));
const camera = new Item_1.default(1, 'Câmera', 50, 20, 15, 10, 1);
const guitarra = new Item_1.default(2, 'Guitarra', 150, 100, 30, 10, 3);
const geladeira = new Item_1.default(3, 'Geladeira', 7, 200, 100, 50, 40);
test('Deve tentar criar um pedido vazio com CPF inválido', function () {
    const cpf = '111.111.111-11';
    expect(() => new Order_1.default(cpf)).toThrow(new Error("Invalid cpf"));
});
test('Deve fazer um pedido com 3 itens', function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(camera, 3);
    order.addItem(guitarra, 1);
    order.addItem(geladeira, 10);
    const total = order.getTotal();
    expect(total).toBe(370);
});
test('Deve fazer um pedido com cupom de desconto', function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(camera, 3);
    order.addItem(guitarra, 1);
    order.addItem(geladeira, 10);
    order.addCoupon(new Coupon_1.default('10PERCENT', 10));
    const total = order.getTotal();
    expect(total).toBe(333);
});
test('Não deve aplicar cupom de desconto expirado', function () {
    const cpf = "839.435.452-10";
    const order = new Order_1.default(cpf);
    order.addItem(camera, 3);
    order.addItem(guitarra, 1);
    order.addItem(geladeira, 10);
    const expirationDate = new Date(2021, 11, 3);
    order.addCoupon(new Coupon_1.default('10PERCENT', 10, expirationDate));
    const total = order.getTotal();
    expect(total).toBe(370);
});
