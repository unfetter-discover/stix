import { Mock } from '../mock';
import { WizardQuestionGrouping } from './wizard-question-grouping';

export class WizardQuestionGroupingMock extends Mock<WizardQuestionGrouping> {

    public mockOne(): WizardQuestionGrouping {
        const tmp = {
            grouingName: 'iptables',
            groupingValue: 'Generic Firewall category',
        } as WizardQuestionGrouping;
        return tmp;
    }

}

export const WizardQuestionGroupingMockFactory = new WizardQuestionGroupingMock();
