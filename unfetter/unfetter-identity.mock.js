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
var mock_1 = require("../mock");
var unfetter_identity_1 = require("./unfetter-identity");
var UnfetterIdentityMock = /** @class */ (function (_super) {
    __extends(UnfetterIdentityMock, _super);
    function UnfetterIdentityMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnfetterIdentityMock.prototype.mockOne = function () {
        var tmp = new unfetter_identity_1.UnfetterIdentity();
        tmp.id = this.genId();
        tmp.name = 'bob';
        tmp.contact_information = 'bob at po box';
        tmp.sectors = ['automotive'];
        return tmp;
    };
    return UnfetterIdentityMock;
}(mock_1.Mock));
exports.UnfetterIdentityMock = UnfetterIdentityMock;
exports.UnfetterIdentityMockFactory = new UnfetterIdentityMock();
