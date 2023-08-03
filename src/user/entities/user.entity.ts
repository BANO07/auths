import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column({unique: true})
    username:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;

    @Column({type:'jsonb'})
    roles:string[];
}
