import { Body, Delete, Get, Injectable, Param, Patch } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Character } from './entities/character.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private cRepository: Repository<Character>
  ){}
  create(createCharacterDto: CreateCharacterDto) {
    const newCharacter = this.cRepository.create(createCharacterDto)
    return this.cRepository.save(newCharacter);
  }
  // create(createCharacterDto: CreateCharacterDto) {
  //   return 'This action adds a new character';
  // }

  async findAll(): Promise<Character[]> {
    try {
      const characters = await this.cRepository.find();
      return characters;
    } catch (error) {
      // Handle error here
    }
  }

  @Get(':id')
    async findOne(@Param('id') id: string): Promise<Character> {
     const findOneOptions : FindOneOptions<Character> = { relations: ['characters'] };
     const character = await this.cRepository.findOne(id && findOneOptions);
     return character;
  }

  @Patch()
  async update(
    id: string,
    updateCharacterDto: UpdateCharacterDto,
  ): Promise<Character> {
    const character = await this.findOne(id);
    const { name, experience } = updateCharacterDto;
    const updatedCharacter = {
      ...character,
      name: name || character.name,
      experience: experience || character.experience,
    };
    return this.cRepository.save(updatedCharacter);
  }



  // update(id: number, updateCharacterDto: UpdateCharacterDto) {
  //   return `This action updates a #${id} character`;
  // }

  @Delete(':id')
   async remove(@Param('id') id: string){
      const findOneOptions : FindOneOptions<Character> = { relations: ['characters'] };
      const character = await this.cRepository.findOne(id && findOneOptions);
      return this.cRepository.remove(character);
    }

  // remove(id: number) {
  //   return `This action removes a #${id} character`;
  // }
}
