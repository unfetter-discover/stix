"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class Indicator {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.INDICATOR;
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
        this.attributes.valid_from = this.attributes.valid_from ?
            new Date(this.attributes.valid_from) : new Date();
        this.attributes.valid_until = this.attributes.valid_until ?
            new Date(this.attributes.valid_until) : new Date();
    }
    createAttributes() {
        return {
            // version: '',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            labels: [],
            external_references: [],
            kill_chain_phases: [],
            metaProperties: {
                observedData: [],
            },
            // name: '',
            // description: '',
            // pattern_lang: '',
            // pattern: '',
            valid_from: new Date(),
            valid_until: new Date(),
        };
    }
}
exports.Indicator = Indicator;
