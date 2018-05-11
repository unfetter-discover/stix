"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var identity_1 = require("../stix/identity");
/**
 * @description identity
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
var UnfetterIdentity = /** @class */ (function (_super) {
    __extends(UnfetterIdentity, _super);
    /**
     * @param data
     */
    function UnfetterIdentity(data) {
        return _super.call(this, data) || this;
    }
    return UnfetterIdentity;
}(identity_1.Identity));
exports.UnfetterIdentity = UnfetterIdentity;
