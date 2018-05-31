import { Bag } from '../common/bag';
import { Publishable } from './publishable';
import { WizardQuestionGroupings } from './wizard-question-groupings';
/**
 * @description unfetter extension of stix
 */
export interface MetaProps extends Bag<any>, Publishable, WizardQuestionGroupings {
}
