"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CpfValidator_1 = __importDefault(require("./CpfValidator"));
test("Should return false if CPF is empty", function () {
    const cpf = "";
    const isCpfValid = (0, CpfValidator_1.default)(cpf);
    expect(isCpfValid).toBe(false);
});
test("Should return false if CPF is lower than 11 digits", function () {
    const cpf = "0123456789";
    const isCpfValid = (0, CpfValidator_1.default)(cpf);
    expect(isCpfValid).toBeFalsy();
});
test("Should return false if CPF is greater than 14 characters", function () {
    const cpf = "012.345.678.090";
    const isCpfValid = (0, CpfValidator_1.default)(cpf);
    expect(isCpfValid).toBeFalsy();
});
test("Should return false if all CPF's characters are equal", function () {
    const cpf = "99999999999";
    const isCpfValid = (0, CpfValidator_1.default)(cpf);
    expect(isCpfValid).toBeFalsy();
});
// 01130585000
// 011.305.850-00
