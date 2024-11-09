import { Controller,Get,Post,Body,Param,Put,Delete } from '@nestjs/common';
import { PaqueteService } from './paquete.service';
import { PaqueteDTO } from 'src/dtos/PaqueteDTO'

@Controller('paquete')
export class PaqueteController {
    //constructor(private readonly paqueteService: PaqueteService) {}

    // @Post()
    // create(@Body() paqueteDto: PaqueteDTO) {
    //     return this.paqueteService.create(paqueteDto.peso, paqueteDto.contenido, paqueteDto.largo, paqueteDto.alto, paqueteDto.ancho, paqueteDto.unidad);
    // }

    // @Get()
    // findAll() {
    //     return this.paqueteService.findAll();
    // }

    // @Get(':id')
    // findOne(@Param('id') id:string){
    //     return this.paqueteService.findOne(+id)
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() body: { peso: number, contenido: string, largo: number, alto: number, ancho: number, unidad: string }) {
    //     return this.paqueteService.update(id, body.peso, body.contenido, body.largo, body.alto, body.ancho, body.unidad);
    // }
    

    // @Delete(':id')
    // remove(@Param('id') id:string)
    // {
    //     return this.paqueteService.remove(id)
    // }

}
