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
var assess_attack_pattern_1 = require("./assess-attack-pattern");
var AssessAttackPatternMock = /** @class */ (function (_super) {
    __extends(AssessAttackPatternMock, _super);
    function AssessAttackPatternMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessAttackPatternMock.prototype.mockOne = function () {
        var tmp = new assess_attack_pattern_1.AssessAttackPattern();
        tmp.id = this.genId();
        tmp.attackPatternId = 'attack-pattern--' + this.genId();
        return tmp;
    };
    return AssessAttackPatternMock;
}(mock_1.Mock));
exports.AssessAttackPatternMock = AssessAttackPatternMock;
exports.AssessAttackPatternMockFactory = new AssessAttackPatternMock();
