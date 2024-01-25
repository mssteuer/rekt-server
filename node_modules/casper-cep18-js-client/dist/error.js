"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractError = exports.ERROR_CODES = void 0;
var ERROR_CODES;
(function (ERROR_CODES) {
    ERROR_CODES[ERROR_CODES["InvalidContext"] = 60000] = "InvalidContext";
    ERROR_CODES[ERROR_CODES["InsufficientBalance"] = 60001] = "InsufficientBalance";
    ERROR_CODES[ERROR_CODES["InsufficientAllowance"] = 60002] = "InsufficientAllowance";
    ERROR_CODES[ERROR_CODES["Overflow"] = 60003] = "Overflow";
    ERROR_CODES[ERROR_CODES["PackageHashMissing"] = 60004] = "PackageHashMissing";
    ERROR_CODES[ERROR_CODES["PackageHashNotPackage"] = 60005] = "PackageHashNotPackage";
    ERROR_CODES[ERROR_CODES["InvalidEventsMode"] = 60006] = "InvalidEventsMode";
    ERROR_CODES[ERROR_CODES["MissingEventsMode"] = 60007] = "MissingEventsMode";
    ERROR_CODES[ERROR_CODES["Phantom"] = 60008] = "Phantom";
    ERROR_CODES[ERROR_CODES["FailedToGetArgBytes"] = 60009] = "FailedToGetArgBytes";
    ERROR_CODES[ERROR_CODES["InsufficientRights"] = 60010] = "InsufficientRights";
    ERROR_CODES[ERROR_CODES["InvalidAdminList"] = 60011] = "InvalidAdminList";
    ERROR_CODES[ERROR_CODES["InvalidMinterList"] = 60012] = "InvalidMinterList";
    ERROR_CODES[ERROR_CODES["InvalidBurnerList"] = 60013] = "InvalidBurnerList";
    ERROR_CODES[ERROR_CODES["InvalidMintAndBurnList"] = 60014] = "InvalidMintAndBurnList";
    ERROR_CODES[ERROR_CODES["InvalidNoneList"] = 60015] = "InvalidNoneList";
    ERROR_CODES[ERROR_CODES["InvalidEnableMBFlag"] = 60016] = "InvalidEnableMBFlag";
    ERROR_CODES[ERROR_CODES["AlreadyInitialized"] = 60017] = "AlreadyInitialized";
    ERROR_CODES[ERROR_CODES["MintBurnDisabled"] = 60018] = "MintBurnDisabled";
})(ERROR_CODES = exports.ERROR_CODES || (exports.ERROR_CODES = {}));
var ContractError = (function (_super) {
    __extends(ContractError, _super);
    function ContractError(code) {
        var _this = _super.call(this, ERROR_CODES[code]) || this;
        _this.code = code;
        return _this;
    }
    return ContractError;
}(Error));
exports.ContractError = ContractError;
//# sourceMappingURL=error.js.map