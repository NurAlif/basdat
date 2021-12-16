import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class UpdateMaterialDto {
    @ApiProperty({
        default: 1
    })
    @IsNotEmpty()
    id: number;
    
    @ApiProperty({
        default: "Teak Wood"
    })
    @MaxLength(50)
    name?: string;

    @ApiProperty({
        default: "Unique texture"
    })
    @IsEmail()
    description?: string;
}