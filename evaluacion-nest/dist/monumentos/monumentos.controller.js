"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonumentosController = void 0;
const common_1 = require("@nestjs/common");
const monumentos_service_1 = require("./monumentos.service");
const crud_1 = require("@nestjsx/crud");
const monumento_entity_1 = require("./entities/monumento.entity");
let MonumentosController = class MonumentosController {
    constructor(service) {
        this.service = service;
    }
};
MonumentosController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: monumento_entity_1.Monumento
        }
    }),
    (0, common_1.Controller)('monumentos'),
    __metadata("design:paramtypes", [monumentos_service_1.MonumentosService])
], MonumentosController);
exports.MonumentosController = MonumentosController;
//# sourceMappingURL=monumentos.controller.js.map