"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceLevel;
(function (ResourceLevel) {
    ResourceLevel["individual"] = "individual";
    ResourceLevel["club"] = "club";
    ResourceLevel["contest"] = "contest";
    ResourceLevel["team"] = "team";
    ResourceLevel["organization"] = "organization";
    ResourceLevel["government"] = "government";
})(ResourceLevel = exports.ResourceLevel || (exports.ResourceLevel = {}));
// tslint:disable-next-line:no-namespace
(function (ResourceLevel) {
    function values() {
        return [
            ResourceLevel.individual, ResourceLevel.club, ResourceLevel.contest,
            ResourceLevel.team, ResourceLevel.organization, ResourceLevel.government,
        ];
    }
    ResourceLevel.values = values;
})(ResourceLevel = exports.ResourceLevel || (exports.ResourceLevel = {}));
