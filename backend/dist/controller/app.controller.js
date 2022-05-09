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
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const app_routes_1 = require("../routes/app.routes");
const app_service_1 = __importDefault(require("../service/app.service"));
const AppController = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '../upload');
        cb(null, path_1.default.join(__dirname, '../upload'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = (0, multer_1.default)({ storage: storage }).single('image');
AppController.post(app_routes_1.AppRoutes.POST_CAR_ADVERT, uploadImg, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqBody = req.body;
        const reqImage = req.file.path;
        reqBody['image'] = reqImage;
        const data = yield app_service_1.default.createCarAdvert(reqBody);
        res.json(data);
    }
    catch (error) {
        throw new Error(error.message);
    }
}));
AppController.get(app_routes_1.AppRoutes.VIEW_CAR_ADVERT, (req, res) => {
    res.send("TESTING");
});
AppController.get(app_routes_1.AppRoutes.ALL_CAR_ADVERTS, (req, res) => {
    res.send("TESTING");
});
AppController.post(app_routes_1.AppRoutes.DELETE_CAR_ADVERT, (req, res) => {
    res.send("TESTING");
});
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map