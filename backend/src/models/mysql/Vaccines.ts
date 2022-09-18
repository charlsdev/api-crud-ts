import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Vaccines extends BaseEntity {
   @PrimaryGeneratedColumn('uuid')
      id: string;

   @Column({
      length: 75
   })
      vacuna: string;

   @Column({
      length: 10
   })
      lote: string;

   @Column({
      type: 'date'
   })
      fechaCaducidad: Date;

   @CreateDateColumn()
      createdDate: Date;

   @UpdateDateColumn()
      updatedDate: Date;
}