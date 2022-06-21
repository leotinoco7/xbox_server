import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    example: 'Leonardo Tinoco',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'leonardo@blue.com.br',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User Password',
    example: 'abcd1234',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User CPF',
    example: '11122233345',
  })
  @Length(11)
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  CPF: number;

  @ApiProperty({
    description: 'Check if user is admin (y/n)',
    example: '',
  })
  @IsBoolean()
  isAdmin?: boolean;
}
