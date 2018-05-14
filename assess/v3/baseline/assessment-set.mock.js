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
var assessment_set_1 = require("./assessment-set");
var object_assessment_mock_1 = require("./object-assessment.mock");
var AssessmentSetMock = /** @class */ (function (_super) {
    __extends(AssessmentSetMock, _super);
    function AssessmentSetMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param  {string|undefined} id?
     * @returns AssessmentSet
     */
    AssessmentSetMock.prototype.mockOne = function (id) {
        var names = ['nortmcfee', 'oxygenwhite', 'seriousbeginings'];
        return this.mockWithNames(names, id);
    };
    /**
     * @param capabilityNames=['nortmcfee', 'oxygenwhite', 'seriousbeginings']
     * @param baseline=true
     * @returns AssessmentSet
     */
    AssessmentSetMock.prototype.mockWithNames = function (capabilityNames, id) {
        if (capabilityNames === void 0) { capabilityNames = ['nortmcfee', 'oxygenwhite', 'seriousbeginings']; }
        var tmp = new assessment_set_1.AssessmentSet();
        tmp.id = id || this.genId(stix_enum_1.StixEnum.ASSESSMENT_SET);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.description = 'this is my hometown network assessment';
        tmp.name = 'home towne network assessment draft 0';
        var objectAssessments = capabilityNames.map(function (capability) {
            var objectAssessment = object_assessment_mock_1.ObjectAssessmentMockFactory.mockOne(capability);
            return objectAssessment;
        });
        tmp.assessments = objectAssessments.map(function (_) { return _.id || ''; });
        return tmp;
    };
    return AssessmentSetMock;
}(mock_1.Mock));
exports.AssessmentSetMock = AssessmentSetMock;
exports.AssessmentSetMockFactory = new AssessmentSetMock();
