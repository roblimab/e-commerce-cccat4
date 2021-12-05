"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/Item"));
const camera = new Item_1.default(1, 'Câmera', 50, 20, 15, 10, 1);
test('Deve calcular corretamente o volume', function () {
    expect(camera.getVolume()).toBe(0.003);
});
test('Deve calcular corretamente a densidade', function () {
    expect(camera.getDensidade()).toBe(333);
});
