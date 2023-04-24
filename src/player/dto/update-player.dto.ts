import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
    @IsNotEmpty()
    @IsEmail()
        email: string;

    @IsBoolean()
        banned: boolean;
}
