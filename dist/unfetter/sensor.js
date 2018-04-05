"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stix_1 = require("./stix");
const stix_enum_1 = require("./stix.enum");
/**
 * @description unfetter extension of stix to include sensor
 */
class Sensor extends stix_1.Stix {
    constructor(data) {
        super();
        Object.assign(this, data);
        this.type = stix_enum_1.StixEnum.SENSOR;
    }
}
exports.Sensor = Sensor;
