import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Monumento } from './entities/monumento.entity';
export declare class MonumentosService extends TypeOrmCrudService<Monumento> {
    constructor(repo: any);
}
