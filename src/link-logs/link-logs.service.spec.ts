import { Test, TestingModule } from '@nestjs/testing';
import { LinkLogsService } from './link-logs.service';

describe('LinkLogsService', () => {
  let service: LinkLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkLogsService],
    }).compile();

    service = module.get<LinkLogsService>(LinkLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
