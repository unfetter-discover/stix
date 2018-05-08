"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description extends core stix entity types to include customer unfetter stix entity types
 * Note we cannot extend a typescript string enum @see https://github.com/Microsoft/TypeScript/issues/17592
 * However we can use union types
 * @example ```
 *  type StixNames = StixEnum | StixCoreEnum;
 *  let t1: StixName = StixEnum.SENSOR;
 *  let t2: StixName = StixCoreEnum.INDICATOR;
 * ```
 */
var StixEnum;
(function (StixEnum) {
    StixEnum["ASSESSMENT"] = "x-unfetter-assessment";
    StixEnum["ASSESSMENT_GROUP"] = "x-unfetter-assessment-group";
    StixEnum["ASSESSMENT_SET"] = "x-unfetter-assessment-set";
    StixEnum["CAPABILITY"] = "x-unfetter-capability";
    StixEnum["CATEGORY"] = "x-unfetter-category";
    StixEnum["OBJECT_ASSESSMENT"] = "x-unfetter-object-assessment";
    StixEnum["ASSESSED_OBJECT"] = "x-unfetter-assessed-object";
    StixEnum["SENSOR"] = "x-unfetter-sensor";
    StixEnum["QUESTION"] = "x-unfetter-question";
})(StixEnum = exports.StixEnum || (exports.StixEnum = {}));
