"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var Indicator = /** @class */ (function () {
    function Indicator(data) {
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
    Indicator.prototype.formatDate = function () {
        this.attributes.valid_from = this.attributes.valid_from ?
            new Date(this.attributes.valid_from) : new Date();
        this.attributes.valid_until = this.attributes.valid_until ?
            new Date(this.attributes.valid_until) : new Date();
    };
    Indicator.prototype.createAttributes = function () {
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
    };
    return Indicator;
}());
exports.Indicator = Indicator;
