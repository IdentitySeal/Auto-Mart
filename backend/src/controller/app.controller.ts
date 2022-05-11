import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { AppRoutes } from '../routes/app.routes';
import CarAdvertService from '../service/app.service';

const AppController = express.Router();


AppController.post(AppRoutes.POST_CAR_ADVERT, async (req: Request, res: Response) => {
    try {
        const reqBody = req.body;
        const data = await CarAdvertService.createCarAdvert(reqBody);
        res.json(data);
    } catch (error) {
        throw new Error(error)
    }
})

AppController.get(AppRoutes.VIEW_CAR_ADVERT, async (req: Request, res: Response) => {
    try {
        const carAdvertId = req.params.carAdvertId;
        const data = await CarAdvertService.viewSpecificCarAdvertById(carAdvertId);
        res.json(data);
    } catch (error) {
        throw new Error(error)

    }
})

AppController.get(AppRoutes.ALL_CAR_ADVERTS, async (req: Request, res: Response) => {
    try {
        const data = await CarAdvertService.getAllCarAdvertPosts();
        res.json(data);
    } catch (error) {
        throw new Error(error)
    }
})

AppController.delete(AppRoutes.DELETE_CAR_ADVERT, async (req: Request, res: Response) => {
    try {
        const data = await CarAdvertService.deleteCarAdvertPosts();
        res.json(data);
    } catch (error) {
        throw new Error(error)
    }
})


export default AppController;
