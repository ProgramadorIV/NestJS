import { MonumentosService } from './monumentos.service';
import { CrudController } from '@nestjsx/crud';
import { Monumento } from './entities/monumento.entity';
export declare class MonumentosController implements CrudController<Monumento> {
    service: MonumentosService;
    constructor(service: MonumentosService);
}
