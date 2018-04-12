"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../mock");
const unfetter_identity_1 = require("./unfetter-identity");
class UnfetterIdentityMock extends mock_1.Mock {
    mockOne() {
        const tmp = new unfetter_identity_1.UnfetterIdentity();
        tmp.id = this.genId();
        tmp.name = 'bob';
        tmp.contact_information = 'bob at po box';
        tmp.sectors = ['automotive'];
        return tmp;
    }
}
exports.UnfetterIdentityMock = UnfetterIdentityMock;
exports.UnfetterIdentityMockFactory = new UnfetterIdentityMock();
