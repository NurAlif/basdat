import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'newuser',
      password: 'password',
      database: 'nest',
      entities: ["dist/**/*.entity.js"],
      synchronize: true,
    }),
  },
];