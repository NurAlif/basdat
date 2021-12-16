import { Connection } from 'typeorm';
import { Category } from './entities/category.entity';
import { Craft } from './entities/craft.entity';
import { Material } from './entities/material.entity';

export const craftProviders = [
  {
    provide: 'craft',
    useFactory: (connection: Connection) => connection.getRepository(Craft),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'category',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'material',
    useFactory: (connection: Connection) => connection.getRepository(Material),
    inject: ['DATABASE_CONNECTION'],
  },
];