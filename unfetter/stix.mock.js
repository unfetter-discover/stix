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
var granular_marking_1 = require("../stix/granular-marking");
var stix_1 = require("./stix");
var StixMock = /** @class */ (function (_super) {
    __extends(StixMock, _super);
    function StixMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StixMock.prototype.mockOne = function (id) {
        var stix = new stix_1.Stix();
        var number = this.genNumber();
        stix.id = id || "stix--" + number;
        stix.name = "name-" + number;
        stix.description = "description-" + number;
        stix.object_refs = ['ref1', 'ref2'];
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new granular_marking_1.GranularMarking()];
        return stix;
    };
    return StixMock;
}(mock_1.Mock));
exports.StixMock = StixMock;
exports.StixMockFactory = new StixMock();
