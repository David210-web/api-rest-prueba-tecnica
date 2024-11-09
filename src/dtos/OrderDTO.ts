import { IsArray, isArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaqueteDTO } from "./PaqueteDTO";
import { Type } from "class-transformer";

export class OrderDTO{
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    fecha: string;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsString()
    @IsNotEmpty()
    correo: string;

    @IsString()
    @IsOptional()
    telefono?: string;

    @IsString()
    @IsNotEmpty()
    direccionDestino: string;

    @IsString()
    @IsNotEmpty()
    departamento: string;

    @IsString()
    @IsNotEmpty()
    municipio: string;

    @IsString()
    @IsOptional()
    puntoReferencia?: string;

    @IsString()
    @IsOptional()
    indicaciones?: string

    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> PaqueteDTO)
    paquetes: PaqueteDTO[]
}