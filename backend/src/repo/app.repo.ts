import { CarAdverModel } from "../model/app.model";
import { ICarAdvert } from "../types/app.types";

class CarAdvertsRepo {
    static createCarAdvert (data :ICarAdvert){
        return CarAdverModel.create(data);
    }
    static checkIfCarAdvertExists (data :ICarAdvert){
        return CarAdverModel.findOne({brand: data.brand,model: data.model})
    }
    static findCarAdvertById(id :string){
        return CarAdverModel.findById(id)
    }
    static removeCarAdvertPosts(){
        return CarAdverModel.remove({})
    }


}

export default CarAdvertsRepo;