"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var fs = require("fs");
var dotenv = require("dotenv");
var path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
var ORG_NAME = process.env.ORG_NAME;
var REPO_NAME = process.env.REPO_NAME;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!ORG_NAME || !REPO_NAME) {
    console.error("ORG_NAME or REPO_NAME environment variables are missing.");
    process.exit(1);
}
if (!GITHUB_TOKEN) {
    console.error("GitHub token is missing. Please set the GITHUB_TOKEN environment variable.");
    process.exit(1);
}
var BASE_URL = "https://api.github.com";
var headers = {
    Accept: "application/vnd.github+json",
    Authorization: "Bearer ".concat(GITHUB_TOKEN),
    "X-GitHub-Api-Version": "2022-11-28",
};
function fetchContributors() {
    return __awaiter(this, void 0, void 0, function () {
        var contributorsUrl, contributorsResponse, contributors, contributorsDetails, filePath, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    contributorsUrl = "".concat(BASE_URL, "/repos/").concat(ORG_NAME, "/").concat(REPO_NAME, "/contributors");
                    console.log("Fetching contributors from:", contributorsUrl);
                    console.log("Headers:", __assign(__assign({}, headers), { Authorization: "***REDACTED***" }));
                    return [4 /*yield*/, axios_1.default.get(contributorsUrl, { headers: headers })];
                case 1:
                    contributorsResponse = _a.sent();
                    console.log("GitHub API Response Status:", contributorsResponse.status);
                    if (!(contributorsResponse.status === 200)) return [3 /*break*/, 3];
                    contributors = contributorsResponse.data;
                    return [4 /*yield*/, Promise.all(contributors.map(function (contributor) { return __awaiter(_this, void 0, void 0, function () {
                            var userResponse;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1.default.get(contributor.url, { headers: headers })];
                                    case 1:
                                        userResponse = _a.sent();
                                        return [2 /*return*/, {
                                                login: contributor.login,
                                                avatar_url: contributor.avatar_url,
                                                html_url: contributor.html_url,
                                                contributions: contributor.contributions,
                                                url: contributor.url,
                                                name: userResponse.data.name || contributor.login,
                                                blog: userResponse.data.blog,
                                                twitter_username: userResponse.data.twitter_username,
                                            }];
                                }
                            });
                        }); }))];
                case 2:
                    contributorsDetails = _a.sent();
                    // Sort contributors by contributions (descending)
                    contributorsDetails.sort(function (a, b) { return b.contributions - a.contributions; });
                    filePath = path.resolve(__dirname, "../../public/contributors.json");
                    // Ensure the file is written to the intended directory
                    if (!filePath.startsWith(path.resolve(__dirname, "../../public"))) {
                        console.error("Invalid file path.");
                        process.exit(1);
                    }
                    fs.writeFileSync(filePath, JSON.stringify(contributorsDetails, null, 2), {
                        mode: 384,
                    });
                    console.log("Contributors data saved to contributors.json");
                    return [3 /*break*/, 4];
                case 3:
                    console.error("Failed to fetch contributors:", contributorsResponse.status);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Error fetching contributors:", error_1.message);
                    if (error_1.response) {
                        console.error("Response status:", error_1.response.status);
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
fetchContributors();
