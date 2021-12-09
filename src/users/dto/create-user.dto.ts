import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsNotEmpty, MaxLength, IsEmail, IsPhoneNumber, MinLength, Matches, IsString} from "class-validator";
import { UserRole } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({
        default: "Marius Wijaya"
    })
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @ApiProperty({
        default: "Marius@gmail.com"
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        default: "+1812173030",
        required:false
    })
    phone?: string;

    @ApiProperty({ 
        enum: ['admin', 'visitor'], 
        default:'visitor',
        required: false
    })
    role?: UserRole;

    @ApiProperty({
        default: "Abcd1234"
    })
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password: string;

    @IsBoolean()
    @ApiProperty({
        default: false,
        required: false
    })
    disabled?: boolean;
}