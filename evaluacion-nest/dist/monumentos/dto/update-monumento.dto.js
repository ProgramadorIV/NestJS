"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonumentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_monumento_dto_1 = require("./create-monumento.dto");
class UpdateMonumentoDto extends (0, mapped_types_1.PartialType)(create_monumento_dto_1.CreateMonumentoDto) {
}
exports.UpdateMonumentoDto = UpdateMonumentoDto;
//# sourceMappingURL=update-monumento.dto.js.map