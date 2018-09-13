import { Mock } from '../mock';
import { ThreatBoard } from './threat-board';
/**
 * @description unfetter data modal for the threat dashboard
 */
export declare class ThreatBoardMock extends Mock<ThreatBoard> {
    mockOne(): ThreatBoard;
}
export declare const ThreatBoardMockFactory: ThreatBoardMock;
