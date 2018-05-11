"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_1 = require("./stix");
/**
 * @description sometimes unfetter wraps stix
 */
var WrappedStix = /** @class */ (function () {
    function WrappedStix() {
        this.stix = new stix_1.Stix();
    }
    return WrappedStix;
}());
exports.WrappedStix = WrappedStix;
