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
exports.Monumento = void 0;
const typeorm_1 = require("typeorm");
let Monumento = class Monumento {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Monumento.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'country_code',
        nullable: false
    }),
    __metadata("design:type", String)
], Monumento.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'country',
        nullable: false
    }),
    __metadata("design:type", String)
], Monumento.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'city',
        nullable: true
    }),
    __metadata("design:type", String)
], Monumento.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'location',
        nullable: false
    }),
    __metadata("design:type", String)
], Monumento.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'name',
        nullable: false
    }),
    __metadata("design:type", String)
], Monumento.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        nullable: true
    }),
    __metadata("design:type", String)
], Monumento.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'url',
        nullable: true
    }),
    __metadata("design:type", String)
], Monumento.prototype, "url", void 0);
Monumento = __decorate([
    (0, typeorm_1.Entity)()
], Monumento);
exports.Monumento = Monumento;
//# sourceMappingURL=monumento.entity.js.map