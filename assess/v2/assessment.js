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
var stix_1 = require("../../unfetter/stix");
var stix_enum_1 = require("../../unfetter/stix.enum");
var assessment_meta_1 = require("./assessment-meta");
/**
 * @description
 */
var Assessment = /** @class */ (function (_super) {
    __extends(Assessment, _super);
    function Assessment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assessmentMeta = new assessment_meta_1.AssessmentMeta();
        _this.assessment_objects = [];
        _this.type = stix_enum_1.StixEnum.ASSESSMENT;
        return _this;
    }
    return Assessment;
}(stix_1.Stix));
exports.Assessment = Assessment;
