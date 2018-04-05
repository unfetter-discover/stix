"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../mock");
const granular_marking_1 = require("./granular-marking");
const stix_core_enum_1 = require("./stix-core.enum");
class GranularMarkingMock extends mock_1.Mock {
    mockOne() {
        const tmp = new granular_marking_1.GranularMarking();
        tmp.marking_ref = stix_core_enum_1.StixCoreEnum.MARKING_DEFINITION + '--' + this.genId();
        tmp.selectors = ['description', 'labels'];
        return tmp;
    }
}
exports.GranularMarkingMock = GranularMarkingMock;
exports.GranularMarkingMockFactory = new GranularMarkingMock();
