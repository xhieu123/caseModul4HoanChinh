import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Home {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:255})
    name:string;
    @Column({type:'varchar',length:255})
    address:string;
    @Column({type:'int'})
    acreage:number;
    @Column({type:'int'})
    price:number;
    @Column({type:'varchar',length:255})
    des:string;
    @Column({type:'varchar',length:255})
    status:string;
    @Column({type:'varchar',length:255})
    image:string;

    @ManyToOne(()=>User,(user)=>user.id)
    user: User

}