"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UUID = require("uuid");
/**
 * @description base class for the spec to mock data objects
 *  override `mockOne` and `mockMany` for custom implementations
 */
var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.prototype.mockMany = function (num, ids) {
        if (num === void 0) { num = 1; }
        return this.genOverRange(num, ids);
    };
    Mock.prototype.genOverRange = function (max, ids) {
        var _this = this;
        if (max === void 0) { max = 1; }
        var arr = Array(max).fill(-1).map(function (_, i) {
            if (ids && ids.length <= i) {
                var id = ids[i];
                return _this.mockOne(id);
            }
            return _this.mockOne();
        });
        return arr;
    };
    Mock.prototype.genNumber = function () {
        return Math.round(Math.random() * 90000);
    };
    /**
     * @description generates an id in stix format eg, `type--type2v4uuid`
     * @param  {StixEnum|StixCoreEnum} type?
     * @returns string
     */
    Mock.prototype.genId = function (type) {
        var uuid = UUID.v4();
        if (type) {
            return type + '--' + uuid;
        }
        return uuid;
    };
    return Mock;
}());
exports.Mock = Mock;
