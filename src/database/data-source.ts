// src/database/data-source.ts
import { DataSource } from 'typeorm';
import { User } from '../autor/application/domain/entities/User';
import { EventEntity } from '../autor/application/domain/entities/events/EventEntity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'mauricio',
  password: 'Rock371dnd33',
  database: 'hexagonalPlan',
  entities: [User, EventEntity],
  synchronize: false, // Usar con precaución en producción
  logging: true,
});
