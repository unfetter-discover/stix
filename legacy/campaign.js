"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var Campaign = /** @class */ (function () {
    function Campaign(data) {
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
    Campaign.prototype.formatDate = function () {
        this.attributes.first_seen = this.attributes.first_seen ?
            new Date(this.attributes.first_seen) : new Date();
    };
    Campaign.prototype.createAttributes = function () {
        return {
            labels: [],
            first_seen: new Date(),
        };
    };
    return Campaign;
}());
exports.Campaign = Campaign;
