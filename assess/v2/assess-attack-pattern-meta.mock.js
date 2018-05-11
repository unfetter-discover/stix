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
var assess_attack_pattern_meta_1 = require("./assess-attack-pattern-meta");
var AssessAttackPatternMetaMock = /** @class */ (function (_super) {
    __extends(AssessAttackPatternMetaMock, _super);
    function AssessAttackPatternMetaMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessAttackPatternMetaMock.prototype.mockOne = function () {
        var meta = new assess_attack_pattern_meta_1.AssessAttackPatternMeta();
        meta.attackPatternName = 'attack-pattern name';
        meta.attackPatternId = 'attack-pattern-' + this.genId();
        return meta;
    };
    return AssessAttackPatternMetaMock;
}(mock_1.Mock));
exports.AssessAttackPatternMetaMock = AssessAttackPatternMetaMock;
exports.AssessAttackPatternMetaMockFactory = new AssessAttackPatternMetaMock();
