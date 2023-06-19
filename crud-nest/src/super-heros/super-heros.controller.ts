import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SuperHerosService } from './super-heros.service';
import { SuperHeros } from './schema/super-heros.schema';

@Controller('super-heros')
export class SuperHerosController {
    constructor(private superHeroServices: SuperHerosService) { }

    @Get()
    async getAll() {
        return await this.superHeroServices.getAll()
    }

    @Post()
    async createSuperHeros(@Body() superHeros: SuperHeros) {
        return await this.superHeroServices.create(superHeros)
    }

    @Get('/:id')
    async getById(@Param('id') id: string) {
        return await this.superHeroServices.getById(id)
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() superHeroes: SuperHeros) {
        return await this.superHeroServices.update(id, superHeroes)
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        await this.superHeroServices.delete(id)
    }

}
