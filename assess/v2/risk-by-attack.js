"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
var RiskByAttack = /** @class */ (function () {
    function RiskByAttack() {
        this.assessedByAttackPattern = [];
        this.attackPatternsByKillChain = [];
        this.phases = [];
    }
    return RiskByAttack;
}());
exports.RiskByAttack = RiskByAttack;
