"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var test = /** @class */ (function () {
    function test() {
    }
    test.prototype.test1 = function () {
        console.log("12312312");
    };
    return test;
}());
new test().test1();
new common_1.common().test1();
