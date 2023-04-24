import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post('newCharacter')
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get('allCharacter')
  findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  @Get('OneCharacter')
  findOne(@Param('id') id: string):Promise<Character> {
    return this.characterService.findOne(id);
  }

  @Patch('characterUpdate')
  async update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto): Promise<Character> {
    return this.characterService.update(id, updateCharacterDto);
  }

  @Delete('characterDelete')
  remove(@Param('id') id: string):Promise<Character> {
    return this.characterService.remove(id);
  }
}
