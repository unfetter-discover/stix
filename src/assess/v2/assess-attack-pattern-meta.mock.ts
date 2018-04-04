import { Mock } from '../../mock';
import { AssessAttackPatternMeta } from './assess-attack-pattern-meta';

export class AssessAttackPatternMetaMock extends Mock<AssessAttackPatternMeta> {
    public mockOne(): AssessAttackPatternMeta {
        const meta = new AssessAttackPatternMeta();
        meta.attackPatternName = 'attack-pattern name';
        meta.attackPatternId = 'attack-pattern-' + this.genId();
        return meta;
    }
}

export const AssessAttackPatternMetaMockFactory = new AssessAttackPatternMetaMock();
