"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class Identity {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.IDENTITY;
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
            // version: '',
            // created: new Date(),
            // modified: new Date(),
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            // name: '',
            // description: '',
            // identity_class: '',
            sectors: [],
        };
    }
}
exports.Identity = Identity;
