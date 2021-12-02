import { PartialType } from '@nestjs/mapped-types';
import { CreateCraftDto } from './create-craft.dto';

export class UpdateCraftDto extends PartialType(CreateCraftDto) {}
