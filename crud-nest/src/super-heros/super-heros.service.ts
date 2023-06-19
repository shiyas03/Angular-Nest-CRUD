import { Injectable } from '@nestjs/common';
import { SuperHeros, superHeroDocument } from './schema/super-heros.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SuperHerosService {

    constructor(
        @InjectModel(SuperHeros.name)
        private superHeroModel: Model<superHeroDocument>
    ) { }

    async getAll(): Promise<SuperHeros[]> {
        return this.superHeroModel.find().exec()
    }

    async create(superHeroes: SuperHeros) {
        const newSuperHeroes = new this.superHeroModel(superHeroes)
        return newSuperHeroes.save()
    }

    async getById(id: string): Promise<SuperHeros> {
        return this.superHeroModel.findById(id).exec()
    }

    async update(id: string, superHeroes: SuperHeros) {
        return await this.superHeroModel.findByIdAndUpdate(id, superHeroes, { new: true })
    }

    async delete(id: string) {
        await this.superHeroModel.findByIdAndDelete(id);
    }
}

