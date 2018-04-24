"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock_1 = require("../../mock");
const stix_enum_1 = require("../../unfetter/stix.enum");
const assessed_object_mock_1 = require("./assessed-object.mock");
const category_1 = require("./category");
class CategoryMock extends mock_1.Mock {
    mockOne() {
        const tmp = new category_1.Category();
        tmp.id = stix_enum_1.StixEnum.CATEGORY + '--' + this.genId();
        tmp.created_by_ref = 'identity--' + this.genId();
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        tmp.assessed_objects = assessed_object_mock_1.AssessedObjectMockFactory.mockMany(3);
        return tmp;
    }
}
exports.CategoryMock = CategoryMock;
exports.CategoryMockFactory = new CategoryMock();
