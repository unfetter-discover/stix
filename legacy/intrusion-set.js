"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var IntrusionSet = /** @class */ (function () {
    function IntrusionSet(data) {
        this.type = stix_core_enum_1.StixCoreEnum.INTRUSION_SET;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
            this.formatDate();
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    IntrusionSet.prototype.formatDate = function () {
        this.attributes.first_seen = this.attributes.first_seen ?
            new Date(this.attributes.first_seen) : new Date();
        this.attributes.last_seen = this.attributes.last_seen ?
            new Date(this.attributes.last_seen) : new Date();
    };
    IntrusionSet.prototype.createAttributes = function () {
        return {
            // version: '',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            // name: '',
            // description: '',
            first_seen: new Date(),
            last_seen: new Date(),
            goals: [],
            // resource_level: '',
            // primary_motivation: '',
            secondary_motivation: [],
            // objective: '',
            // timestamp_precision: '',
            labels: [],
            aliases: [],
            external_references: [],
            kill_chain_phases: [],
        };
    };
    return IntrusionSet;
}());
exports.IntrusionSet = IntrusionSet;
