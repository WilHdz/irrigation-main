import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import { UserController } from './autor/infrastructure/controllers/UserController';
import { EventController } from './autor/infrastructure/controllers/EventController';
import { EventService } from './autor/application/domain/entities/events/EventService';

const app = express();
const port = 3000;
const userController = new UserController();
const eventService = new EventService();
const eventController = new EventController(eventService);

app.use(cors());
app.use(express.json());

// Rutas para usuarios
app.post('/register', (req, res) => userController.createUser(req, res));
app.post('/login', (req, res) => userController.login(req, res));

// Rutas para eventos
app.post('/events', (req, res) => eventController.createEvent(req, res));
app.get('/events', (req, res) => eventController.getAllEvents(req, res));

// Inicializa la base de datos y el servidor
AppDataSource.initialize()
  .then(async () => {
    console.log('Connected to the database!');

    // Crea la tabla "eventos" si no existe
    await AppDataSource.manager.query(`
      CREATE TABLE IF NOT EXISTS eventos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        timestamp DATETIME NOT NULL,
        distance FLOAT NOT NULL,
        soilhumidity VARCHAR(255) NOT NULL,
        mensaje VARCHAR(255) NOT NULL
      )
    `);

    // Crea la tabla "users" si no existe
    await AppDataSource.manager.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);

    console.log('Las tablas "eventos" y "users" se crearon correctamente.');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => console.log('Database connection error:', error));
