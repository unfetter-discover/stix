"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class IntrusionSet {
    constructor(data) {
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
    formatDate() {
        this.attributes.first_seen = this.attributes.first_seen ?
            new Date(this.attributes.first_seen) : new Date();
        this.attributes.last_seen = this.attributes.last_seen ?
            new Date(this.attributes.last_seen) : new Date();
    }
    createAttributes() {
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
    }
}
exports.IntrusionSet = IntrusionSet;
