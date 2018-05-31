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
var assess_attack_pattern_meta_mock_1 = require("./assess-attack-pattern-meta.mock");
var phase_1 = require("./phase");
var PhaseMock = /** @class */ (function (_super) {
    __extends(PhaseMock, _super);
    function PhaseMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhaseMock.prototype.mockOne = function () {
        var tmp = new phase_1.Phase();
        tmp._id = 'phase-' + this.genId();
        tmp.attackPatterns = assess_attack_pattern_meta_mock_1.AssessAttackPatternMetaMockFactory.mockMany(4);
        return tmp;
    };
    return PhaseMock;
}(mock_1.Mock));
exports.PhaseMock = PhaseMock;
exports.PhaseMockFactory = new PhaseMock();
