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
var mock_1 = require("../../../mock");
var stix_core_enum_1 = require("../../../stix/stix-core.enum");
var stix_enum_1 = require("../../../unfetter/stix.enum");
var assessed_object_mock_1 = require("./assessed-object.mock");
var category_1 = require("./category");
var CategoryMock = /** @class */ (function (_super) {
    __extends(CategoryMock, _super);
    function CategoryMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryMock.prototype.mockOne = function () {
        var tmp = new category_1.Category();
        tmp.id = this.genId(stix_enum_1.StixEnum.CATEGORY);
        tmp.created_by_ref = this.genId(stix_core_enum_1.StixCoreEnum.IDENTITY);
        tmp.description = 'monitors network traffic';
        tmp.name = 'network monitor';
        tmp.assessed_objects = assessed_object_mock_1.AssessedObjectMockFactory.mockMany(3);
        return tmp;
    };
    return CategoryMock;
}(mock_1.Mock));
exports.CategoryMock = CategoryMock;
exports.CategoryMockFactory = new CategoryMock();
