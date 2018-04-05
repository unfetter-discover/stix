/**
 * @description core stix 2.0 entity types
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 */
export enum StixCoreEnum {
    ATTACK_PATTERN = 'attack-pattern',
    CAMPAIGN = 'campaign',
    COURSE_OF_ACTION = 'course-of-action',
    IDENTITY = 'identity',
    INDICATOR = 'indicator',
    INTRUSION_SET = 'intrusion-set',
    MALWARE = 'malware',
    MARKING_DEFINITION = 'marking-definition',
    OBSERVED_DATA = 'observed-data',
    REPORT = 'report',
    THREAT_REPORT = 'threat-report',
    THREAT_ACTOR = 'threat-actor',
    TOOL = 'tool',
    VULNERABILITY = 'vulnerability',
    SIGHTING = 'sighting',
}
