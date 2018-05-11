"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_enum_1 = require("../stix/stix-core.enum");
var Sighting = /** @class */ (function () {
    function Sighting(data) {
        this.type = stix_core_enum_1.StixCoreEnum.SIGHTING;
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
            this.formatDate();
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    Sighting.prototype.formatDate = function () {
        this.attributes.first_seen = this.attributes.first_seen ?
            new Date(this.attributes.first_seen) : new Date();
        this.attributes.last_seen = this.attributes.last_seen ?
            new Date(this.attributes.last_seen) : new Date();
    };
    Sighting.prototype.createAttributes = function () {
        return {
            // version: '1',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            external_references: [],
            first_seen: new Date(),
            // firstseen_precision: '',
            last_seen: new Date(),
            // lastseen_precision: '',
            count: 0,
            // sighting_of_ref: '',
            observed_data_refs: [],
            where_sighted_refs: [],
        };
    };
    return Sighting;
}());
exports.Sighting = Sighting;
