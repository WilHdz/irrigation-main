// src/autor/application/domain/entities/events/EventEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('eventos')
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  timestamp: Date;

  @Column('float')
  distancia: number;

  @Column()
  tierra: string;

  @Column()
  mensaje: string;

  constructor(timestamp: Date, distancia: number, tierra: string, mensaje: string) {
    this.timestamp = timestamp;
    this.distancia = distancia;
    this.tierra = tierra;
    this.mensaje = mensaje;
  }
}
