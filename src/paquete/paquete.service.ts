import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';  // Importar PrismaService
import { PaqueteDTO } from 'src/dtos/PaqueteDTO';

@Injectable()
export class PaqueteService {
  // constructor(private prismaService: PrismaService) {}

  // //Crea un nuevo campo
  // async create(peso: number, contenido: string, largo: number, alto: number, ancho: number, unidad: string): Promise<PaqueteDTO> {
  //   const paqueteData = new PaqueteDTO();
  //   paqueteData.peso = peso;
  //   paqueteData.contenido = contenido;
  //   paqueteData.largo = largo;
  //   paqueteData.alto = alto;
  //   paqueteData.ancho = ancho;
  //   paqueteData.unidad = unidad;

  //   return this.prismaService.create(paqueteData); // Llamar al PrismaService para crear el paquete
  // }


  

  // //Obtiene todos los paquetes
  // async findAll(): Promise<PaqueteDTO[]> {
  //   return this.prismaService.findAll(); // Obtener todos los paquetes
  // }

  // //Obtiene una paquete en base al ID
  // async findOne(id: number): Promise<PaqueteDTO> {
  //   return this.prismaService.findOne(id); // Buscar un paquete por ID
  // }

  // //Actualiza un paquete con el id seleccionado
  // async update(idUpdated: string, peso: number, contenido: string, largo: number, alto: number, ancho: number, unidad: string): Promise<PaqueteDTO> {
  //   const id: number = Number.parseInt(idUpdated);
  //   const paqueteData = { peso, contenido, largo, alto, ancho, unidad };
  //   return this.prismaService.update(id, paqueteData); // Actualizar el paquete
  // }

  // //Elimina un paquete en base al id seleccionado
  // async remove(idDeleted: string): Promise<boolean> {
  //   const id: number = Number.parseInt(idDeleted);
  //   return this.prismaService.remove(id); // Eliminar un paquete
  // }
}
