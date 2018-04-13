"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const stix_enum_1 = require("../../unfetter/stix.enum");
const category_1 = require("./category");
class CategoryMock extends mock_1.Mock {
    mockOne() {
        const tmp = new category_1.Category();
        tmp.id = stix_enum_1.StixEnum.CATEGORY + '--' + this.genId();
        tmp.created_by_ref = 'identity--' + this.genId();
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        return tmp;
    }
}
exports.CategoryMock = CategoryMock;
exports.CategoryMockFactory = new CategoryMock();
