import CarAdvertsRepo from "../repo/app.repo";
import { ICarAdvert } from "../types/app.types";

class CarAdvertService {
    static async createCarAdvert (data: ICarAdvert){
        try {
            const checker = await CarAdvertsRepo.checkIfCarAdvertExists(data);
            if(!checker){
                const req = await CarAdvertsRepo.createCarAdvert(data)
                return {
                    message: 'Advert Created Sucessfully',
                    data: req,
                    statusCode: 201,
                  };
            }
            return {
                message: 'Advert Already Exists',
                data: null,
                statusCode: 400,
              };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default CarAdvertService;