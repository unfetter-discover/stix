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
var mock_1 = require("../../mock");
var granular_marking_1 = require("../../stix/granular-marking");
var stix_enum_1 = require("../../unfetter/stix.enum");
var assessment_object_mock_1 = require("../v2/assessment-object.mock");
var assessment_1 = require("./assessment");
var AssessmentMock = /** @class */ (function (_super) {
    __extends(AssessmentMock, _super);
    function AssessmentMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssessmentMock.prototype.mockOne = function () {
        var tmp = new assessment_1.Assessment();
        var number = this.genNumber();
        tmp.id = this.genId(stix_enum_1.StixEnum.ASSESSMENT);
        tmp.name = "zone 1 cluster " + number + " assessment 3";
        tmp.description = "description-" + number;
        tmp.object_refs = ['1', '2'];
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new granular_marking_1.GranularMarking()];
        tmp.assessment_objects = assessment_object_mock_1.AssessmentObjectMockFactory.mockMany(5);
        return tmp;
    };
    return AssessmentMock;
}(mock_1.Mock));
exports.AssessmentMock = AssessmentMock;
exports.AssessmentMockFactory = new AssessmentMock();
