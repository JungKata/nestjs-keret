import { Body, Delete, Get, Injectable, NotFoundException, Param, Patch } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayerService {

  constructor(
    @InjectRepository(Player)
    private readonly pRepository: Repository<Player>
  ){}
  create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = this.pRepository.create(createPlayerDto)
    return this.pRepository.save(newPlayer);
    //'This action adds a new player';
  }

  async findAll(): Promise<Player[]> {
    try {
      const players = await this.pRepository.find();
      return players;
    } catch (error) {
      // Handle error here
    }
  }

  @Get(':id')
    async findOne(@Param('id') id: string): Promise<Player> {
     const findOneOptions : FindOneOptions<Player> = { relations: ['players'] };
     const user = await this.pRepository.findOne(id && findOneOptions);
     return user;
  }


  async update(id: string, updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    const findOneOptions: FindOneOptions<Player> = { relations: ['players'] };
    const playerToUpdate = await this.findOne(id);
    this.pRepository.merge(playerToUpdate, updatePlayerDto);
    return this.pRepository.save(playerToUpdate);
  }


  // update(id: number, updatePlayerDto: UpdatePlayerDto) {
  //   return `This action updates a #${id} player`;
  // }

  @Delete(':id')
   async remove(@Param('id') id: string){
      const findOneOptions : FindOneOptions<Player> = { relations: ['players'] };
      const user = await this.pRepository.findOne(id && findOneOptions);
      return this.pRepository.remove(user);
    }
  // remove(id: number) {
  //   return `This action removes a #${id} player`;
  // }
}
