import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Player } from 'src/player/entities/player.entity';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Player, Character])],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports:[CharacterService]
})
export class CharacterModule {}
