import { Test, TestingModule } from '@nestjs/testing';
import { Craft } from './craft';

describe('Craft', () => {
  let provider: Craft;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Craft],
    }).compile();

    provider = module.get<Craft>(Craft);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
