import { Connection } from 'typeorm';
import { Craft } from './entities/craft.entity';

export const craftProviders = [
  {
    provide: 'craft',
    useFactory: (connection: Connection) => connection.getRepository(Craft),
    inject: ['DATABASE_CONNECTION'],
  },
];