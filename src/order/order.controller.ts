import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from 'src/dtos/OrderDTO';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Crear una nueva orden
  @Post()
  async createOrder(@Body() orderData: OrderDTO) {
    return this.orderService.create(orderData);
  }

  // Obtener todas las órdenes
  @Get()
  async findAllOrders() {
    return this.orderService.findAll();
  }

  // Obtener una orden por ID
  @Get(':id')
  async findOrderById(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  // Actualizar una orden
  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() orderData: Partial<OrderDTO>) {
    return this.orderService.update(+id, orderData);
  }

  // Eliminar una orden
  @Delete(':id')
  async removeOrder(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
