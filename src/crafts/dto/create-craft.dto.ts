import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString, isArray} from "class-validator";

import { Material } from "../entities/material.entity";

export class CreateCraftDto {
    @ApiProperty({
        default: "Wooden Stool 1"
    })
    name: string;
    
    @ApiProperty({
        default: "-"
    })
    description: string;
    
    @ApiProperty({
        default: "1"
    })
    material: number; 
    
    @ApiProperty({
        default: "1"
    })
    category: number; 
    
    @ApiProperty({
        default: [2,1],
        type: 'array',
        items: {type: 'number'}
    })
    photos: number[];
    
    @ApiProperty({
        default: "8"
    })
    author: number;
    
    @ApiProperty({
        default: "1"
    })
    thumbnail: number;
    
    @ApiProperty({
        default: false,
        required: false
    })
    disabled: boolean;
}
