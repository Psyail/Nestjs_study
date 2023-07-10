import { Column, Entity } from "typeorm";
import { DefaultEntity } from "./default.entitu";

@Entity()
export class UserEntity extends DefaultEntity{
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    email:string;
    @Column()
    birth:string;
}