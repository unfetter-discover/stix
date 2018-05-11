"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Relationship = /** @class */ (function () {
    function Relationship(data) {
        if (data) {
            this.attributes = data.attributes;
            this.id = data.id;
        }
        else {
            this.attributes = this.createAttributes();
        }
    }
    Relationship.prototype.createAttributes = function () {
        return {
            // version: '1',
            // created: moment().format(Constance.DATE_FORMATE),
            // modified: moment().format(Constance.DATE_FORMATE),
            labels: [],
            external_references: [],
            kill_chain_phases: [],
        };
    };
    return Relationship;
}());
exports.Relationship = Relationship;
