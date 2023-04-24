import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePlayerDto {
    @IsEmail()
    email: string;
  
    @IsBoolean()
    @IsOptional()
    banned?: boolean;
  }