"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const risk_value_1 = require("./risk-value");
class RiskValueMock extends mock_1.Mock {
    mockOne() {
        const tmp = new risk_value_1.RiskValue();
        tmp.risk = Math.random();
        tmp.name = 'risk name';
        return tmp;
    }
}
exports.RiskValueMock = RiskValueMock;
exports.RiskValueMockFactory = new RiskValueMock();
