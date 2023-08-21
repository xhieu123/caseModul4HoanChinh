import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {Home} from "./Home";
import {User} from "./User";



@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'int'})
    time: number;

    @Column({type: 'int'})
    price: number

    @ManyToOne(() => User, (user) => user.id)
    user: User

    @ManyToOne(() => Home, (home) => home.id)
    home: Home
}
