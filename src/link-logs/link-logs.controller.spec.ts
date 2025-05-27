import { Test, TestingModule } from '@nestjs/testing';
import { LinkLogsController } from './link-logs.controller';
import { LinkLogsService } from './link-logs.service';

describe('LinkLogsController', () => {
  let controller: LinkLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkLogsController],
      providers: [LinkLogsService],
    }).compile();

    controller = module.get<LinkLogsController>(LinkLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
