import { Module } from '@nestjs/common';
import { CraftsService } from './crafts.service';
import { CraftsController } from './crafts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { craftProviders } from './craftProviders';

@Module({
  imports:[DatabaseModule],
  controllers: [CraftsController],
  providers: [...craftProviders, CraftsService]
})
export class CraftsModule {}
