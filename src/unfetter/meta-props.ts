import { Bag } from '../common/bag';
import { AssessmentGroupings } from './assessment-groupings';
import { Publishable } from './publishable';

/**
 * @description unfetter extension of stix
 */
export interface MetaProps extends Bag<any>, Publishable, AssessmentGroupings {}
