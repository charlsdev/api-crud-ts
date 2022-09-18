import { BaseEntity, Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class Nurses extends BaseEntity {
   @Column({
      length: 10,
      primary: true
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
      length: 10
   })
      genero: string;

   @Column({
      length: 75
   })
      direccion: string;

   @Column({
      length: 10
   })
      telefono: string;

   @Column({
      length: 75,
      transformer: {
         to: (value: string) => value.toLowerCase(),
         from: (value: string) => value
      }
   })
      email: string;

   @CreateDateColumn()
      createdDate: Date;

   @UpdateDateColumn()
      updatedDate: Date;
}