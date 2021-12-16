import { Module } from '@nestjs/common';
import { CraftsService } from './crafts.service';
import { CategoriesController, CraftsController, MaterialsController } from './crafts.controller';
import { DatabaseModule } from 'src/database/database.module';
import { craftProviders } from './craftProviders';
import { photoProviders } from 'src/photos/photoProviders';
import { userProviders } from 'src/users/users.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [CraftsController, MaterialsController, CategoriesController],
  providers: [...craftProviders, ...photoProviders, ...userProviders , CraftsService]
})
export class CraftsModule {}
