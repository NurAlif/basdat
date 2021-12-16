import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class AddPhotoCraftDto {
    @ApiProperty({
        default: 4
    })
    @IsNotEmpty()
    craftId: number;

    @ApiProperty({
        default: 2
    })
    @IsNotEmpty()
    photoId: number;
}