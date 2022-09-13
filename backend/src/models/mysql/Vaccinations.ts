import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { Nurses } from './Nurses';
import { Pacients } from './Pacients';
import { Vaccines } from './Vaccines';

@Entity()
export class Vaccinations {
   @PrimaryGeneratedColumn('uuid')
      id: string;

   @ManyToOne(() => Pacients, {
      nullable: false,
      cascade: true,
      onUpdate: 'CASCADE'
   })
   @JoinColumn({ name: 'cedPaciente' })
      cedPaciente: Pacients;

   @ManyToOne(() => Nurses, {
      nullable: false,
      cascade: true,
      onUpdate: 'CASCADE'
   })
   @JoinColumn({ name: 'cedEnfermera' })
      cedEnfermera: Nurses;

   @ManyToOne(() => Vaccines, {
      nullable: false,
      cascade: true,
      onUpdate: 'CASCADE'
   })
   @JoinColumn({ name: 'idVacuna' })
      idVacuna: Vaccines;

   @Column({
      length: 10
   })
      fecha: string;

   @Column({
      length: 255
   })
      observaciones: string;

   @CreateDateColumn()
      createdDate: Date;

   @UpdateDateColumn()
      updatedDate: Date;
}