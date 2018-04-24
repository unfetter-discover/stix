"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_1 = require("../../unfetter/stix");
const stix_enum_1 = require("../../unfetter/stix.enum");
/**
 *  @description Category is a generic bin name for a real products capability, ex. Network Monitor
 *  This object is an Unfetter Stix extension
 */
class Category extends stix_1.Stix {
    /**
     * @description generate an object with default fields for this type
     *  will copy extra fields from the data passed in
     * @param data - optional
     */
    constructor(data) {
        super(data);
        this.type = stix_enum_1.StixEnum.CATEGORY;
        this.assessed_objects = this.assessed_objects || [];
    }
}
exports.Category = Category;
