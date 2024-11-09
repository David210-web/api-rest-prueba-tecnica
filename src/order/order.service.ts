import { Injectable } from '@nestjs/common';
import { OrderDTO } from 'src/dtos/OrderDTO';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaqueteDTO } from 'src/dtos/PaqueteDTO';


@Injectable()
export class OrderService {
    constructor(private prismaService: PrismaService) {}

    async create(orderDTO : OrderDTO) : Promise<OrderDTO>
    {

        return await this.prismaService.create(orderDTO)
    }

    async findAll(): Promise<OrderDTO[]> {
        return await this.prismaService.findAll();
    }

    async findOne(id : number): Promise<OrderDTO>{
        return await this.prismaService.findOne(id)
    }

    async update(id : number, orderData: Partial<OrderDTO>): Promise<OrderDTO>{
        return await this.prismaService.update(id,orderData);
    }

    async remove(id: number): Promise<boolean>{
        return await this.prismaService.remove(id)
    }
}
