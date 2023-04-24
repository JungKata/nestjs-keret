import { Character } from "src/character/entities/character.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player{

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
    email: string;

    @Column({default:false})
    banned: boolean;

    @OneToMany(() => Character, (charater) => charater.player)
    character: Character[];
}