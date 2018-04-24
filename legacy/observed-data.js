"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class ObservedData {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.MALWARE;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    createAttributes() {
        return {
            // version: '1',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            first_observed: new Date().toISOString(),
            last_observed: new Date().toISOString(),
            labels: [],
            external_references: [],
        };
    }
}
exports.ObservedData = ObservedData;
