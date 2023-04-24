import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCharacterDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    name: string;

    @IsNotEmpty()
    experience: number
}
