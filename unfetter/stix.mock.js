"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../mock");
const granular_marking_1 = require("../stix/granular-marking");
const stix_1 = require("./stix");
class StixMock extends mock_1.Mock {
    mockOne() {
        const stix = new stix_1.Stix();
        const number = this.genNumber();
        stix.id = `stix-${number}`;
        stix.name = `name-${number}`;
        stix.description = `description-${number}`;
        stix.object_refs = ['1', '2'];
        stix.modified = new Date().toISOString();
        stix.granular_markings = [new granular_marking_1.GranularMarking()];
        return stix;
    }
}
exports.StixMock = StixMock;
exports.StixMockFactory = new StixMock();
