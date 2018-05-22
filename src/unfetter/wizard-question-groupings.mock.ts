import { Mock } from '../mock';
import { WizardQuestionGroupingMockFactory } from './wizard-question-grouping.mock';
import { WizardQuestionGroupings } from './wizard-question-groupings';

export class WizardQuestionGroupingsMock extends Mock<WizardQuestionGroupings> {

    public mockOne(): WizardQuestionGroupings {
        const tmp = {
            groupings: [],
        } as WizardQuestionGroupings;

        const groupingArr = WizardQuestionGroupingMockFactory.mockMany(4);
        tmp.groupings = groupingArr;
        return tmp;
    }

}

export const WizardQuestionGroupingsMockFactory = new WizardQuestionGroupingsMock();
