import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';
import { EGender } from '../../enums/gender.enum';

export class CarBaseReqDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowercase)
  @IsString()
  @Length(3, 50)
  producer: string;

  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowercase)
  @IsString()
  @Length(3, 50)
  model: string;

  @ApiProperty({ example: 2021 })
  @Type(() => Number)
  @IsInt()
  @Min(1900)
  year: number;
}

export class UserBaseReqDto {
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(3, 50)
  name: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(150)
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'example@gmail.com' })
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowercase)
  @IsString()
  @IsEmail()
  email: string;

  @Transform(TransformHelper.trim)
  @IsString()
  phone: string;

  @IsOptional()
  @IsEnum(EGender)
  gender: EGender;

  @IsBoolean()
  @IsOptional()
  isStudent: boolean = false;

  @ApiProperty({ example: '1e44fsfqwASD' })
  @Transform(TransformHelper.trim)
  @IsNotIn(['password', '123456', 'qwerty'])
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and be at least 8 characters long',
  })
  password: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CarBaseReqDto)
  cars: CarBaseReqDto[];
}
