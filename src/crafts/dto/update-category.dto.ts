import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class UpdateCategoryDto {
    @ApiProperty({
        default: 1
    })
    @IsNotEmpty()
    id: number;

    @ApiProperty({
        default: "Cultery",
        required: false
    })
    @MaxLength(50)
    name?: string;

    @ApiProperty({
        default: "Spoons, Plate, Bowl, etc...",
        required: false
    })
    @IsEmail()
    description?: string;

    @IsBoolean()
    @ApiProperty({
        default: false,
        required: false
    })
    disabled?: boolean;
}