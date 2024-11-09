import { IsString,IsNotEmpty,IsOptional,IsNumber } from 'class-validator'

export class PaqueteDTO{
    @IsOptional()
    @IsNumber()
    id? : number;

    @IsNumber()
    @IsNotEmpty()
    peso: number

    @IsString()
    @IsNotEmpty()
    contenido : string;

    @IsNumber()
    @IsNotEmpty()
    largo: number

    @IsNumber()
    @IsNotEmpty()
    alto: number

    @IsNumber()
    @IsNotEmpty()
    ancho: number

    @IsString()
    @IsNotEmpty()
    unidad: string
}