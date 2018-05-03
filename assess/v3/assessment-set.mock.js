"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const stix_core_enum_1 = require("../../stix/stix-core.enum");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessment_set_1 = require("./assessment-set");
const object_assessment_mock_1 = require("./object-assessment.mock");
class AssessmentSetMock extends mock_1.Mock {
    mockOne(capabilityNames = ['nortmcfee', 'oxygenwhite', 'seriousbeginings'], baseline = true) {
        const tmp = new assessment_set_1.AssessmentSet();
        tmp.id = this.genId(stix_enum_1.StixEnum.ASSESSMENT_SET);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.description = 'this is my hometown network assessment';
        tmp.name = 'home towne network assessment draft 0';
        tmp.is_baseline = baseline;
        const objectAssessments = capabilityNames.map((capability) => {
            const objectAssessment = object_assessment_mock_1.ObjectAssessmentMockFactory.mockOne(capability);
            return objectAssessment;
        });
        tmp.assessments = objectAssessments.map((_) => _.id || '');
        return tmp;
    }
}
exports.AssessmentSetMock = AssessmentSetMock;
exports.AssessmentSetMockFactory = new AssessmentSetMock();
