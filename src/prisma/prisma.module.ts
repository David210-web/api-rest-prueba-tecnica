import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],  // Exportamos el servicio para que se pueda usar en otros módulos
})
export class PrismaModule {}
