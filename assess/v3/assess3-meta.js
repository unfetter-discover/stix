"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Assess3Meta {
    constructor(title = '', description = '', created_by_ref = '', includesIndicators = false, includesMitigations = false, baselineRef) {
        this.title = title;
        this.description = description;
        this.created_by_ref = created_by_ref;
        this.includesIndicators = includesIndicators;
        this.includesMitigations = includesMitigations;
        this.baselineRef = baselineRef;
    }
}
exports.Assess3Meta = Assess3Meta;
