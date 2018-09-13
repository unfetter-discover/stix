"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("../mock");
var granular_marking_1 = require("../stix/granular-marking");
var stix_enum_1 = require("./stix.enum");
var threat_board_1 = require("./threat-board");
/**
 * @description unfetter data modal for the threat dashboard
 */
var ThreatBoardMock = /** @class */ (function (_super) {
    __extends(ThreatBoardMock, _super);
    function ThreatBoardMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreatBoardMock.prototype.mockOne = function () {
        var tmp = new threat_board_1.ThreatBoard();
        tmp.id = this.genId(stix_enum_1.StixEnum.THREAT_BOARD);
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
        tmp.granular_markings = [new granular_marking_1.GranularMarking()];
        return tmp;
    };
    return ThreatBoardMock;
}(mock_1.Mock));
exports.ThreatBoardMock = ThreatBoardMock;
exports.ThreatBoardMockFactory = new ThreatBoardMock();
