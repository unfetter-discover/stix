"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const stix_core_enum_1 = require("../../stix/stix-core.enum");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessed_object_mock_1 = require("./assessed-object.mock");
const capability_mock_1 = require("./capability.mock");
const object_assessment_1 = require("./object-assessment");
class ObjectAssessmentMock extends mock_1.Mock {
    mockOne(capabilityName) {
        const tmp = new object_assessment_1.ObjectAssessment();
        tmp.id = this.genId(stix_enum_1.StixEnum.OBJECT_ASSESSMENT);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.assessments_objects = assessed_object_mock_1.AssessedObjectMockFactory.mockMany(3);
        tmp.object_ref = capability_mock_1.CapabilityMockFactory.mockOne(capabilityName).id || '';
        return tmp;
    }
}
exports.ObjectAssessmentMock = ObjectAssessmentMock;
exports.ObjectAssessmentMockFactory = new ObjectAssessmentMock();
