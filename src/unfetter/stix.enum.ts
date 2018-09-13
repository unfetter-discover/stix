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
export enum StixEnum {
    ASSESSED_OBJECT = 'x-unfetter-assessed-object',
    ASSESSMENT = 'x-unfetter-assessment',
    ASSESSMENT_GROUP = 'x-unfetter-assessment-group',
    ASSESSMENT_SET = 'x-unfetter-assessment-set',
    CAPABILITY = 'x-unfetter-capability',
    CATEGORY = 'x-unfetter-category',
    OBJECT_ASSESSMENT = 'x-unfetter-object-assessment',
    QUESTION = 'x-unfetter-question',
    SENSOR = 'x-unfetter-sensor',
    THREAT_BOARD = 'x-threat-board'
}
