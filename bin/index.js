#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("./util");
main(process.argv.slice(2, 3)[0]);
function main(arg) {
    if (arg) {
        var zshrc = fs_1.readFileSync(util_1.getZshrcPath(), "utf8");
        var newLines = zshrc.split(/(\r\n|\n)/g);
        var themeLine = newLines.find(function (line) { return line.includes("ZSH_THEME"); });
        var currentTheme = themeLine === null || themeLine === void 0 ? void 0 : themeLine.split('"')[1];
        if (currentTheme === arg) {
            console.warn("Theme \"" + arg + "\" already set.");
        }
        else {
            var newZshrc = zshrc.replace("ZSH_THEME=\"" + currentTheme + "\"", "ZSH_THEME=\"" + arg + "\"");
            fs_1.writeFileSync(util_1.getZshrcPath(), newZshrc);
            console.log("Successfully set theme \"" + arg + "\".");
        }
    }
    else {
        console.warn("No theme specified.");
    }
    process.exit(0);
}
