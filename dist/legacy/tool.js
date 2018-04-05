"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_core_enum_1 = require("../stix/stix-core.enum");
class Tool {
    constructor(data) {
        this.type = stix_core_enum_1.StixCoreEnum.TOOL;
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
            // description: '',
            name: '',
            aliases: [],
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    }
}
exports.Tool = Tool;
