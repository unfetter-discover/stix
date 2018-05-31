"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var ThreatActor = /** @class */ (function () {
    function ThreatActor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.THREAT_ACTOR;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    ThreatActor.prototype.createAttributes = function () {
        return {
            // version: '',
            // created: new Date(),
            // modified: new Date(),
            // description: '',
            labels: [],
            aliases: [],
            external_references: [],
            kill_chain_phases: [],
        };
    };
    return ThreatActor;
}());
exports.ThreatActor = ThreatActor;
