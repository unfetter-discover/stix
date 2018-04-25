"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description an assessment of a single type ie, indicator, mitigation, sensor
 */
class RiskByAttack {
    constructor() {
        this.assessedByAttackPattern = [];
        this.attackPatternsByKillChain = [];
        this.phases = [];
    }
}
exports.RiskByAttack = RiskByAttack;
