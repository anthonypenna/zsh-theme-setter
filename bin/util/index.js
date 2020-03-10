"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = require("os");
function getZshrcPath() {
    var USER = os_1.userInfo().username;
    return "/Users/" + USER + "/.zshrc";
}
exports.getZshrcPath = getZshrcPath;
