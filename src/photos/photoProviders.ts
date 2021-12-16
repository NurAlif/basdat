import { Connection } from 'typeorm';
import { Photo } from './entities/photo.entity';

export const photoProviders = [
  {
    provide: 'photo',
    useFactory: (connection: Connection) => connection.getRepository(Photo),
    inject: ['DATABASE_CONNECTION'],
  },
];