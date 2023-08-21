import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:255, nullable: true})
    name:string;
    @Column({type:'varchar', nullable: true})
    email:string;
    @Column({type:'varchar',length:255})
    username:string;
    @Column({type:'varchar',length:255})
    password:string;
    @Column({type:'varchar',length:255, nullable: true})
    role:string;
}