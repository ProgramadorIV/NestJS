import { Test, TestingModule } from '@nestjs/testing';
import { MonumentosController } from './monumentos.controller';
import { MonumentosService } from './monumentos.service';

describe('MonumentosController', () => {
  let controller: MonumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonumentosController],
      providers: [MonumentosService],
    }).compile();

    controller = module.get<MonumentosController>(MonumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
