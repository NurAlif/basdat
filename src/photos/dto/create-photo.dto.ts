import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";

export class CreatePhotoDto {
    @ApiProperty({
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxjYbpapps17hZGfCUCTuTSf_lCosIJIQmwva0ErzIFeBlV7piyMHSoFJ0HzXwpTtEl0&usqp=CAU"
    })
    @IsNotEmpty()
    url: string;

    @ApiProperty({
        default: "penguin"
    })
    @IsNotEmpty()
    description: string;

}