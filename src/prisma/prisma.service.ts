import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dtos/OrderDTO';
import { PaqueteDTO } from 'src/dtos/PaqueteDTO';

@Injectable()
export class PrismaService {
  // Almacena los paquetes en memoria como una simulación de la base de datos
  private paquetes: PaqueteDTO[] = [];
  private ordenes: OrderDTO[] = [];
  
  // Simula la creación de un paquete
  async create(orderData: OrderDTO): Promise<OrderDTO> {
    // Simula un autoincremento de ID
    const order = { ...orderData, id: this.ordenes.length + 1 };
    this.ordenes.push(order);
    return order;
  }

  // Simula la obtención de todos los paquetes
  async findAll(): Promise<OrderDTO[]> {
    return this.ordenes;
  }

  // Simula la búsqueda de un paquete por ID
  async findOne(id: number): Promise<OrderDTO> {
    return this.ordenes.find(p => p.id === id);
  }

  // Simula la actualización de un paquete
  async update(id: number, paqueteData: Partial<OrderDTO>): Promise<OrderDTO> {
    const orderIndex = this.ordenes.findIndex(p => p.id === id);
    if (orderIndex === -1) {
      throw new Error('Orden no encontrado');
    }

    this.paquetes[orderIndex] = { ...this.paquetes[orderIndex], ...paqueteData };
    return this.ordenes[orderIndex];
  }

  // Simula la eliminación de un paquete
  async remove(id: number): Promise<boolean> {
    const orderIndex = this.ordenes.findIndex(p => p.id === id);
    if (orderIndex === -1) {
      return false;
    }

    this.ordenes.splice(orderIndex, 1);
    return true;
  }
}
