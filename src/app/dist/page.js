"use client";
"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var react_1 = require("react");
var HomePage = function () {
    return (react_1["default"].createElement("div", null,
        "HomePage",
        react_1["default"].createElement(nextjs_1.SignedIn, null,
            react_1["default"].createElement(nextjs_1.SignOutButton, null)),
        react_1["default"].createElement(nextjs_1.SignedOut, null,
            react_1["default"].createElement(nextjs_1.SignInButton, null))));
};
exports["default"] = HomePage;
