"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_model_1 = require("../model/app.model");
class CarAdvertsRepo {
    static createCarAdvert(data) {
        return app_model_1.CarAdverModel.create(data);
    }
    static checkIfCarAdvertExists(data) {
        return app_model_1.CarAdverModel.findOne({ brand: data.brand, model: data.model });
    }
    static findCarAdvertById(id) {
        return app_model_1.CarAdverModel.findById(id);
    }
    static removeCarAdvertPosts() {
        return app_model_1.CarAdverModel.remove({});
    }
}
exports.default = CarAdvertsRepo;
//# sourceMappingURL=app.repo.js.map