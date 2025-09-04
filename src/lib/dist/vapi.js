"use strict";
exports.__esModule = true;
exports.vapi = void 0;
var web_1 = require("@vapi-ai/web");
exports.vapi = new web_1["default"](process.env.NEXT_PUBLIC_VAPI_API_KEY);
