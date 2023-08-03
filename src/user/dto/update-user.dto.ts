import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsOptional, Matches, IsEmail, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsOptional()
    id:string;
    
    @Matches(/^[a-zA-Z0-9 ]+$/)
    @IsNotEmpty()
    @IsOptional()
    name:string;

    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9 ]+$/)
    @IsOptional()
    username:string;

    @IsEmail({}, {message:'Please enter correct email'})
    @IsNotEmpty()
    @IsOptional()
    email:string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password:string;
}
