import {model, Schema} from 'mongoose';
import { ICarAdvert } from '../types/app.types';

const CarAdverSchema = new Schema<ICarAdvert>({
    brand: {required: true,type: 'String'},
    description: {required: true,type: 'String'},
    cost: {required: true,type: 'Number'},
    year: {required: true,type: 'Number'},
    model: {required: true,type: 'String'},
    color: {required: true,type: 'String'},
    image: {required: true,type: 'String'},
}, {timestamps: true},
);

export const CarAdverModel = model('car_adverts', CarAdverSchema);
