"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../../mock");
var risk_value_1 = require("./risk-value");
var RiskValueMock = /** @class */ (function (_super) {
    __extends(RiskValueMock, _super);
    function RiskValueMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RiskValueMock.prototype.mockOne = function () {
        var tmp = new risk_value_1.RiskValue();
        tmp.risk = Math.random();
        tmp.name = 'risk name';
        return tmp;
    };
    return RiskValueMock;
}(mock_1.Mock));
exports.RiskValueMock = RiskValueMock;
exports.RiskValueMockFactory = new RiskValueMock();
