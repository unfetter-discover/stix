export class Assess3Meta {
    constructor(
        public title = '',
        public description = '',
        public created_by_ref = '',
        public includesIndicators = false,
        public includesMitigations = false,
        public baselineRef?: string,
    ) { }
}
