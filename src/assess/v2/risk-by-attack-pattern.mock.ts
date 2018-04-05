import { Mock } from '../../mock';
import { AssessedByAttackPatternMockFactory } from './assessed-by-attack-pattern.mock';
import { PhaseMockFactory } from './phase.mock';
import { RiskByAttack } from './risk-by-attack';

export class RiskByAttackPatternMock extends Mock<RiskByAttack> {
    public mockOne(): RiskByAttack {
        const tmp = new RiskByAttack();
        tmp.phases = PhaseMockFactory.mockMany(4);
        tmp.assessedByAttackPattern = AssessedByAttackPatternMockFactory.mockMany(4);
        return tmp;
    }

}

export const RiskByAttackPatternMockFactory = new RiskByAttackPatternMock();
