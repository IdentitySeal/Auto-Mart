"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_repo_1 = __importDefault(require("../repo/app.repo"));
class CarAdvertService {
    static createCarAdvert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checker = yield app_repo_1.default.checkIfCarAdvertExists(data);
                if (!checker) {
                    const req = yield app_repo_1.default.createCarAdvert(data);
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
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.default = CarAdvertService;
//# sourceMappingURL=app.service.js.map