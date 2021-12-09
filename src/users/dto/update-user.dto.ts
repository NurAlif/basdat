import { ApiProperty, PartialType } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';
import { IsOptional} from "class-validator";
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    name?: string;

    @IsOptional()
    email?: string;

    @IsOptional()
    phone?: string;

    @IsOptional()
    @ApiProperty({ 
        enum: ['admin', 'visitor'], 
    })
    role?: UserRole;

    @IsOptional()
    password?: string;

    @IsOptional()
    disabled?: boolean;
}
