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
var mock_1 = require("../../../mock");
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var capability_1 = require("./capability");
var CapabilityMock = /** @class */ (function (_super) {
    __extends(CapabilityMock, _super);
    function CapabilityMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CapabilityMock.prototype.mockOne = function (name, description) {
        if (name === void 0) { name = 'nortmcfee antivirus'; }
        if (description === void 0) { description = 'file scanning for hashes and malware'; }
        var tmp = new capability_1.Capability();
        tmp.id = this.genId(stix_enum_1.StixEnum.CAPABILITY);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.description = description;
        tmp.name = name;
        return tmp;
    };
    return CapabilityMock;
}(mock_1.Mock));
exports.CapabilityMock = CapabilityMock;
exports.CapabilityMockFactory = new CapabilityMock();
