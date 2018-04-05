"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const capability_1 = require("./capability");
class CapabilityMock extends mock_1.Mock {
    mockOne() {
        const tmp = new capability_1.Capability();
        tmp.id = this.genId();
        tmp.created_by_ref = 'identity-' + this.genId();
        tmp.description = 'this does file scanning for hashes and malware';
        tmp.name = 'nortfee antivirus';
        return tmp;
    }
}
exports.CapabilityMock = CapabilityMock;
exports.CapabilityMockFactory = new CapabilityMock();
