"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var AttackPattern = /** @class */ (function () {
    function AttackPattern(data) {
        this.type = stix_core_enum_1.StixCoreEnum.ATTACK_PATTERN;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    AttackPattern.prototype.createAttributes = function () {
        return {
            // version: '',
            // created: new Date(),
            // modified: new Date(),
            // description: '',
            name: '',
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    };
    return AttackPattern;
}());
exports.AttackPattern = AttackPattern;
