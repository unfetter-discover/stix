"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stix_enum_1 = require("./stix.enum");
var threat_board_1 = require("./threat-board");
var threat_board_mock_1 = require("./threat-board.mock");
describe('threat board model', function () {
    var stix;
    beforeEach(function () {
        stix = threat_board_mock_1.ThreatBoardMockFactory.mockOne();
    });
    it('should have a constructor', function () {
        expect(stix).toBeDefined();
    });
    it('should have a name', function () {
        expect(stix.name).toBeDefined();
    });
    it('should have boundaries', function () {
        expect(stix.boundaries).toBeDefined();
        expect(stix.boundaries.start_date).toBeDefined();
    });
    it('should have a copy constructor', function () {
        var copied = new threat_board_1.ThreatBoard(stix);
        expect(copied.name).toBe(stix.name);
        expect(copied.boundaries).toEqual(stix.boundaries);
    });
    it('should have the correct type', function () {
        expect(stix.type).toBe(stix_enum_1.StixEnum.THREAT_BOARD);
    });
});
