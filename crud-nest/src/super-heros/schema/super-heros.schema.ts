import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type superHeroDocument = SuperHeros & Document

@Schema({ collection : 'super-heros'})
export class SuperHeros {
    @Prop()
    name:string;

    @Prop()
    powers:string

    @Prop()
    franchise:string

    @Prop()
    imageUrl:string
}

export const SuperHerosSchema = SchemaFactory.createForClass(SuperHeros)