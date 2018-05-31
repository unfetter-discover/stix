"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var ObservedData = /** @class */ (function () {
    function ObservedData(data) {
        this.type = stix_core_enum_1.StixCoreEnum.MALWARE;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    ObservedData.prototype.createAttributes = function () {
        return {
            // version: '1',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            first_observed: new Date().toISOString(),
            last_observed: new Date().toISOString(),
            labels: [],
            external_references: [],
        };
    };
    return ObservedData;
}());
exports.ObservedData = ObservedData;
