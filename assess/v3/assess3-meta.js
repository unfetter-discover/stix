"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assess3Meta = /** @class */ (function () {
    function Assess3Meta(title, description, created_by_ref, includesIndicators, includesMitigations, baselineRef) {
        if (title === void 0) { title = ''; }
        if (description === void 0) { description = ''; }
        if (created_by_ref === void 0) { created_by_ref = ''; }
        if (includesIndicators === void 0) { includesIndicators = false; }
        if (includesMitigations === void 0) { includesMitigations = false; }
        this.title = title;
        this.description = description;
        this.created_by_ref = created_by_ref;
        this.includesIndicators = includesIndicators;
        this.includesMitigations = includesMitigations;
        this.baselineRef = baselineRef;
    }
    return Assess3Meta;
}());
exports.Assess3Meta = Assess3Meta;
