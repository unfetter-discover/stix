"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UUID = require("uuid");
/**
 * @description base class for the spec to mock data objects
 */
class Mock {
    mockMany(num = 1) {
        return this.genOverRange(num);
    }
    genOverRange(max = 1) {
        const arr = Array(max).fill(-1).map((_, i) => this.mockOne());
        return arr;
    }
    genNumber() {
        return Math.round(Math.random() * 90000);
    }
    genId() {
        return UUID.v4();
    }
}
exports.Mock = Mock;
