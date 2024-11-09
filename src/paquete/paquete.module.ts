import { Module } from '@nestjs/common';
import { PaqueteController } from './paquete.controller';
import { PaqueteService } from './paquete.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PaqueteController],
  providers: [PaqueteService,PrismaService]
})
export class PaqueteModule {}
