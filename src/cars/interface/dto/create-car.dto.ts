import { IsString, MaxLength } from "class-validator"

export class CreateCarDto{
    @IsString()
    readonly brand: string
    @IsString()
    @MaxLength(50)
    readonly model: string
}