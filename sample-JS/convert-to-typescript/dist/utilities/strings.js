"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize = function (str) {
    var newStr = str.split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
        .join(' ');
    return newStr;
};
var upperCase = function (str) {
    return str.toUpperCase();
};
var lowerCase = function (str) {
    return str.toLowerCase();
};
exports.default = {
    // concat,
    capitalize: capitalize,
    upperCase: upperCase,
    lowerCase: lowerCase
};
