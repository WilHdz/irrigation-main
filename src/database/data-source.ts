// src/database/data-source.ts
import { DataSource } from 'typeorm';
import { User } from '../autor/application/domain/entities/User';
import { EventEntity } from '../autor/application/domain/entities/events/EventEntity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'javier',
  password: 'america234',
  database: 'back',
  entities: [User, EventEntity],
  synchronize: true, // Usar con precaución en producción
  logging: true,
});
