import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Character } from 'src/character/entities/character.entity';
import { Player } from './entities/player.entity';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('play')
  create(@Body() createPlayerDto: CreatePlayerDto):Promise<Player> {
    return this.playerService.create(createPlayerDto);
  }

  @Get('findAll')
  findAll():Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get('onePlayer')
  findOne(@Param('id') id: string): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Patch('playerUpdate')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto):Promise<Player> {
    return this.playerService.update(id, updatePlayerDto);
  }

  @Delete('playerDelete')
  remove(@Param('id') id: string):Promise<Player> {
    return this.playerService.remove(id);
  }
}
