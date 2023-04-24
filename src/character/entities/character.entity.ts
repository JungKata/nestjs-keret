import { Player } from "src/player/entities/player.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

    @Entity()
    export class Character{
    
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
    
    @Column({default: 0})
        experience: number 
    
    @ManyToOne(() => Player, (player) => player.character)
    player: Player[]
}
