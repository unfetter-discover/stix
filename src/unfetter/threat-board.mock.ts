import { Mock } from '../mock';
import { GranularMarking } from '../stix/granular-marking';
import { StixEnum } from './stix.enum';
import { ThreatBoard } from './threat-board';

/**
 * @description unfetter data modal for the threat dashboard
 */
export class ThreatBoardMock extends Mock<ThreatBoard> {
    public mockOne() {
        const tmp = new ThreatBoard();
        tmp.id = this.genId(StixEnum.THREAT_BOARD);
        tmp.name = 'My Threat Board';
        tmp.description = 'For testing purposes';
        tmp.reports = [
            'report--36974637-3258-4041-b70c-74693f0cfdb',
        ];
        tmp.boundaries = {
            end_date: '2018-09-13T13:52:21.862Z',
                intrusion_sets: [
                    'intrusion-set--16974637-3258-4041-b70c-74693f0cfdb5',
                ],
                malware: [
                    'malware--26974637-3258-4041-b70c-74693f0cfdb',
                ],
                start_date: '2018-09-13T13:52:21.862Z',
                targets: [
                    'Wigets & Associates',
                ],
        };
        tmp.modified = new Date().toISOString();
        tmp.granular_markings = [new GranularMarking()];
        return tmp;
    }
}

export const ThreatBoardMockFactory = new ThreatBoardMock();
