import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperHeros, SuperHerosSchema } from './schema/super-heros.schema';
import { SuperHerosService } from './super-heros.service';
import { SuperHerosController } from './super-heros.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: SuperHeros.name,
            schema: SuperHerosSchema,
            collection:'super-heros'
        }])
    ],
    providers: [SuperHerosService],
    controllers: [SuperHerosController]
})
export class SuperHerosModule { }
