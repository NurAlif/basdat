import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.providers';
import { DatabaseModule } from './database/database.module';
import { CraftsModule } from './crafts/crafts.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [DatabaseModule, CraftsModule, UsersModule, PhotosModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
