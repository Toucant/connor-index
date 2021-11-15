import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
@ObjectType()
@Entity()
export class Company extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ unique: true })
    companyName!: string;



    @Field()
    @OneToMany(() => User, (user) => user.userCompany)
    activeUsers: User[];

    
}