"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var report_1 = require("./report");
var UUID = require("uuid");
var ReportMock = /** @class */ (function () {
    function ReportMock() {
    }
    ReportMock.mockAttribs = function () {
        return {
            version: '2.0',
            created: new Date(),
            modified: new Date(),
            description: 'description',
            name: 'name',
            published: new Date(),
            labels: ['label1', 'label2'],
            object_refs: ['attack-pattern-' + UUID.v4()],
            external_references: [],
            kill_chain_phases: [],
            metaProperties: {},
        };
    };
    ReportMock.mock = function (id) {
        var report = new report_1.Report();
        report.id = id || UUID.v4();
        report.url = 'https://domain.io/report/' + report.id;
        report.attributes = ReportMock.mockAttribs();
        return report;
    };
    ReportMock.mockMany = function (lim) {
        if (lim === void 0) { lim = 10; }
        var arr = [];
        for (var i = 0; i < lim; i++) {
            var report = ReportMock.mock();
            arr[i] = report;
        }
        return arr;
    };
    return ReportMock;
}());
exports.ReportMock = ReportMock;
