import { BaseEntity, Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

enum Genero {
   Masculino = 'Masculino',
   Femenino = 'Femenino',
   NoDefinido = 'No Definido'
}

@Entity()
export class Pacients extends BaseEntity {
   @Column({
      length: 10,
      primary: true,
      unique: true
   })
      cedula: string;

   @Column({
      length: 75
   })
      apellidos: string;

   @Column({
      length: 75
   })
      nombres: string;

   @Column({
      length: 10
   })
      fechNacimiento: string;

   @Column({
      type: 'enum',
      enum: Genero,
      default: Genero.NoDefinido
   })
      genero: Genero;

   @Column({
      length: 75
   })
      direccion: string;

   @Column({
      length: 10
   })
      telefono: string;

   @Column({
      length: 75
   })
      email: string;

   @CreateDateColumn()
      createdDate: Date;

   @UpdateDateColumn()
      updatedDate: Date;
}