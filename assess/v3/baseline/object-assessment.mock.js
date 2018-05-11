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
var assessed_object_mock_1 = require("./assessed-object.mock");
var capability_mock_1 = require("./capability.mock");
var object_assessment_1 = require("./object-assessment");
var ObjectAssessmentMock = /** @class */ (function (_super) {
    __extends(ObjectAssessmentMock, _super);
    function ObjectAssessmentMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectAssessmentMock.prototype.mockOne = function (capabilityName) {
        var tmp = new object_assessment_1.ObjectAssessment();
        tmp.id = this.genId(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.assessments_objects = assessed_object_mock_1.AssessedObjectMockFactory.mockMany(3);
        tmp.object_ref = capability_mock_1.CapabilityMockFactory.mockOne(capabilityName).id || '';
        return tmp;
    };
    return ObjectAssessmentMock;
}(mock_1.Mock));
exports.ObjectAssessmentMock = ObjectAssessmentMock;
exports.ObjectAssessmentMockFactory = new ObjectAssessmentMock();
