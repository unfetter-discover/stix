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
var mock_1 = require("../mock");
var kill_chain_phase_1 = require("./kill-chain-phase");
var kill_chain_enum_1 = require("./kill-chain.enum");
var KillChainPhaseMock = /** @class */ (function (_super) {
    __extends(KillChainPhaseMock, _super);
    function KillChainPhaseMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KillChainPhaseMock.prototype.mockOne = function () {
        var tmp = new kill_chain_phase_1.KillChainPhase(kill_chain_enum_1.KillChainEnum.NTCTF, 'administer - planning');
        return tmp;
    };
    return KillChainPhaseMock;
}(mock_1.Mock));
exports.KillChainPhaseMock = KillChainPhaseMock;
exports.KillChainPhaseMockFactory = new KillChainPhaseMock();
