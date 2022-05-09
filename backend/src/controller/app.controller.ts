import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { AppRoutes } from '../routes/app.routes';
import CarAdvertService from '../service/app.service';

const AppController = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, '../upload');
        cb(null, path.join(__dirname, '../upload'));

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = multer({ storage: storage }).single('image');

AppController.post(AppRoutes.POST_CAR_ADVERT, uploadImg, async (req: Request, res: Response) => {
    try {
        const reqBody = req.body;
        const reqImage = req.file.path;
        reqBody['image'] = reqImage
        const data = await CarAdvertService.createCarAdvert(reqBody);
        res.json(data);
    } catch (error) {
        throw new Error(error.message)
    }
})




AppController.get(AppRoutes.VIEW_CAR_ADVERT, async (req: Request, res: Response) => {
    try {
        const carAdvertId = req.params.carAdvertId;
        console.log(carAdvertId);
        const data = await CarAdvertService.viewSpecificCarAdvertById(carAdvertId);
        res.json(data);
    } catch (error) {
        throw new Error(error.message)

    }
})

AppController.get(AppRoutes.ALL_CAR_ADVERTS, (req: Request, res: Response) => {
    res.send("TESTING")
})
AppController.post(AppRoutes.DELETE_CAR_ADVERT, (req: Request, res: Response) => {
    res.send("TESTING")
})


export default AppController;
