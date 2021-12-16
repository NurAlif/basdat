import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString, isArray} from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateCraftDto } from './create-craft.dto';

export class UpdateCraftDto extends PartialType(CreateCraftDto) {
    @ApiProperty({
        default: 8
    })
    id: number;
    
    @ApiProperty({
        default: "Wooden Stool 1",
        required: false
    })
    name?: string;
    
    @ApiProperty({
        default: "-",
        required: false
    })
    description?: string;
    
    @ApiProperty({
        default: "1",
        required: false
    })
    material?: number; 
    
    @ApiProperty({
        default: "1",
        required: false
    })
    category?: number; 
    
    @ApiProperty({
        type: 'array',
        items: {type: 'number'},
        required: false
    })
    photos?: number[];
    
    @ApiProperty({
        default: "8",
        required: false
    })
    author?: number;
    
    @ApiProperty({
        default: "1",
        required: false
    })
    thumbnail?: number;
    
    @ApiProperty({
        default: false,
        required: false
    })
    disabled?: boolean;
}
