import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class CreateMaterialDto {
    @ApiProperty({
        default: "Teak Wood"
    })
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty({
        default: "Unique texture"
    })
    @IsNotEmpty()
    description: string;
}