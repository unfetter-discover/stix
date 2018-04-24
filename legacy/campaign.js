"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class Campaign {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.CAMPAIGN;
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
    }
    createAttributes() {
        return {
            labels: [],
            first_seen: new Date(),
        };
    }
}
exports.Campaign = Campaign;
