"use client";
"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var react_1 = require("convex/react");
var react_clerk_1 = require("convex/react-clerk");
var convex = new react_1.ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
function ConvexClerkProvider(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, { publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY },
        React.createElement(react_clerk_1.ConvexProviderWithClerk, { client: convex, useAuth: nextjs_1.useAuth }, children)));
}
exports["default"] = ConvexClerkProvider;
