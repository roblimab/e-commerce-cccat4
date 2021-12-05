"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coupon {
    constructor(code, percentage, expirationDate = new Date()) {
        this.code = code;
        this.percentage = percentage;
        this.expirationDate = new Date(expirationDate.toDateString());
    }
    isExpired() {
        if (this.expirationDate < new Date(new Date().toDateString())) {
            return true;
        }
    }
}
exports.default = Coupon;
