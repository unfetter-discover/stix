"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../../mock");
const stix_core_enum_1 = require("../../../stix/stix-core.enum");
const stix_enum_1 = require("../../../unfetter/stix.enum");
const capability_1 = require("./capability");
class CapabilityMock extends mock_1.Mock {
    mockOne(name = 'nortmcfee antivirus', description = 'file scanning for hashes and malware') {
        const tmp = new capability_1.Capability();
        tmp.id = this.genId(stix_enum_1.StixEnum.CAPABILITY);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.description = description;
        tmp.name = name;
        return tmp;
    }
}
exports.CapabilityMock = CapabilityMock;
exports.CapabilityMockFactory = new CapabilityMock();
