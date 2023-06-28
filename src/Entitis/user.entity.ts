import { Column } from "typeorm";

export class UserEntity{
    @Column()
    username:string;
    @Column()
    passward:string;
    @Column()
    email:string;
    @Column()
    birth:string;
}