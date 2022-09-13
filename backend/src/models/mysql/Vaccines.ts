import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Vaccines {
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
      fechaCaducidad: string;

   @CreateDateColumn()
      createdDate: Date;

   @UpdateDateColumn()
      updatedDate: Date;
}