import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    active: boolean;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    language: string;

    @Column()
    username: string;

    @Column()
    hash: string;

    @Column()
    salt: string;

    @Column()
    iterations: number;
}
