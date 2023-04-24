import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { Player } from './entities/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from 'src/character/entities/character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Character])],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports:[PlayerService]
})
export class PlayerModule {}
