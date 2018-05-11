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
var stix_core_enum_1 = require("./stix-core.enum");
var GranularMarkingMock = /** @class */ (function (_super) {
    __extends(GranularMarkingMock, _super);
    function GranularMarkingMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GranularMarkingMock.prototype.mockOne = function () {
        var tmp = new granular_marking_1.GranularMarking();
        tmp.marking_ref = stix_core_enum_1.StixCoreEnum.MARKING_DEFINITION + '--' + this.genId();
        tmp.selectors = ['description', 'labels'];
        return tmp;
    };
    return GranularMarkingMock;
}(mock_1.Mock));
exports.GranularMarkingMock = GranularMarkingMock;
exports.GranularMarkingMockFactory = new GranularMarkingMock();
