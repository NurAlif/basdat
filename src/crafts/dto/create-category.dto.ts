import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        default: "Cultery"
    })
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty({
        default: "Spoons, Plate, Bowl, etc..."
    })
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @ApiProperty({
        default: false,
        required: false
    })
    disabled?: boolean;
}