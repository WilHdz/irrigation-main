import { DataSource } from 'typeorm';
import { User } from '../autor/application/domain/entities/User';
import { EventEntity } from '../autor/application/domain/entities/events/EventEntity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '107.21.131.2', // Verifica que esta IP sea correcta
  port: 3306,
  username: 'yahir', // Verifica que este usuario exista y tenga permisos
  password: 'prueba123', // Verifica que esta contraseña sea correcta
  database: 'mysql',
  entities: [User, EventEntity],
  synchronize: false,
  logging: true,
  driver: require('mysql2'), // Asegúrate de que el driver mysql2 esté instalado
});
