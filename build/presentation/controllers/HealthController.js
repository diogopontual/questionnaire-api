"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const inversify_express_utils_1 = require("inversify-express-utils");
let HealthController = class HealthController {
    index(req, res, next) {
        return 'The server is up and running!';
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)('/'),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)()),
    __param(2, (0, inversify_express_utils_1.next)())
], HealthController.prototype, "index", null);
HealthController = __decorate([
    (0, inversify_express_utils_1.controller)('/health')
], HealthController);
exports.HealthController = HealthController;
