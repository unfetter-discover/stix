"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const report_1 = require("./report");
const UUID = require("uuid");
class ReportMock {
    static mockAttribs() {
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
    }
    static mock(id) {
        const report = new report_1.Report();
        report.id = id || UUID.v4();
        report.url = 'https://domain.io/report/' + report.id;
        report.attributes = ReportMock.mockAttribs();
        return report;
    }
    static mockMany(lim = 10) {
        const arr = [];
        for (let i = 0; i < lim; i++) {
            const report = ReportMock.mock();
            arr[i] = report;
        }
        return arr;
    }
}
exports.ReportMock = ReportMock;
