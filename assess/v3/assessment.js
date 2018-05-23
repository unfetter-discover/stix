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
var stix_1 = require("../../unfetter/stix");
var stix_enum_1 = require("../../unfetter/stix.enum");
var assessment_object_1 = require("../v2/assessment-object");
var assess3_meta_1 = require("./assess3-meta");
var assessment_eval_type_enum_1 = require("./assessment-eval-type.enum");
/**
 * @description An assessment represents subjective scoring;
 *  of mitigations, indicator, and capabilities in ones environment
 */
var Assessment = /** @class */ (function (_super) {
    __extends(Assessment, _super);
    function Assessment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assessmentMeta = new assess3_meta_1.Assess3Meta();
        _this.assessment_objects = [];
        _this.type = stix_enum_1.StixEnum.ASSESSMENT;
        return _this;
    }
    /**
     * @description inspects the first assessed object and determines
     *  this objects Assessment type
     * @see AssessmentEvalTypeEnum
     * @returns AssessmentEvalTypeEnum
     */
    Assessment.prototype.determineAssessmentType = function () {
        if (!this.assessment_objects || this.assessment_objects.length === 0) {
            return assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNASSESSED;
        }
        var assessedObjects = this.assessment_objects || [];
        var firstObject = assessedObjects[0] || new assessment_object_1.AssessmentObject();
        if (!firstObject.stix) {
            return assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNASSESSED;
        }
        var assessedType = firstObject.stix.type;
        var retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNKNOWN_TYPE;
        switch (assessedType) {
            case 'course-of-action':
                retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.MITIGATIONS;
                break;
            case 'indicator':
                retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.INDICATORS;
                break;
            case 'x-unfetter-sensor':
                retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.SENSORS;
                break;
            case 'x-unfetter-object-assessment':
                retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.CAPABILITIES;
                break;
            default:
                retVal = assessment_eval_type_enum_1.AssessmentEvalTypeEnum.UNKNOWN_TYPE;
        }
        return retVal;
    };
    return Assessment;
}(stix_1.Stix));
exports.Assessment = Assessment;
