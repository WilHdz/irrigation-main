import { DataSource } from 'typeorm';
import { User } from '../autor/application/domain/entities/User';
import { EventEntity } from '../autor/application/domain/entities/events/EventEntity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost', // Verifica que esta IP sea correcta
  port: 3306,
  username: 'ITS', // Verifica que este usuario exista y tenga permisos
  password: '1234', // Verifica que esta contraseña sea correcta
  database: 'Multi',
  entities: [User, EventEntity],
  synchronize: false,
  logging: true,
  driver: require('mysql2'),// Asegúrate de que el driver mysql2 esté instalado
});
