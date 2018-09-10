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
var granular_marking_1 = require("./granular-marking");
var stix_core_1 = require("./stix-core");
var StixCoreMock = /** @class */ (function (_super) {
    __extends(StixCoreMock, _super);
    function StixCoreMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StixCoreMock.prototype.mockOne = function () {
        var stix = new stix_core_1.StixExpanded();
        var number = this.genNumber();
        stix.id = "stix-" + number;
        stix.name = "name-" + number;
        stix.description = "description-" + number;
        stix.object_refs = ['1', '2'];
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new granular_marking_1.GranularMarking()];
        return stix;
    };
    return StixCoreMock;
}(mock_1.Mock));
exports.StixCoreMock = StixCoreMock;
exports.StixCoreMockFactory = new StixCoreMock();
