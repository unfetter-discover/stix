import { Stix } from './stix';
import { StixEnum } from './stix.enum';
import { ThreatBoard } from './threat-board';
import { ThreatBoardMockFactory } from './threat-board.mock';

describe('threat board model', () => {

    let stix: ThreatBoard;

    beforeEach(() => {
        stix = ThreatBoardMockFactory.mockOne();
    });

    it('should have a constructor', () => {
        expect(stix).toBeDefined();
    });

    it('should have a name', () => {
        expect(stix.name).toBeDefined();
    });

    it('should have boundaries', () => {
        expect(stix.boundaries).toBeDefined();
        expect(stix.boundaries.start_date).toBeDefined();
    });

    it('should have a copy constructor', () => {
        const copied = new ThreatBoard(stix);
        expect(copied.name).toBe(stix.name);
        expect(copied.boundaries).toEqual(stix.boundaries);
    });

    it('should have the correct type', () => {
        expect(stix.type).toBe(StixEnum.THREAT_BOARD);
    });
});
