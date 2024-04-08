import { Request, Response } from 'express';
import { CreateCandyCategoryService } from '../services/candyCategory/CreateCandyCategoryService';
import { UpdateCandyCategoryService } from '../services/candyCategory/UpdateCandyCategoryService';
import { GetCandyCategoryService } from '../services/candyCategory/GetCandyCategoryService';
import { GetCandyCategoryByIdService } from '../services/candyCategory/GetCandyCategoryByIdService';
import { DeleteCandyCategoryService } from '../services/candyCategory/DeleteCandyCategoryService';
import { CreateCandyService } from '../services/candy/CreateCandyService';
import { UpdateCandyService } from '../services/candy/UpdateCandyService';
import { GetCandyService } from '../services/candy/GetCandyService';
import { GetCandyByIdService } from '../services/candy/GetCandyByIdService';
import { DeleteCandyService } from '../services/candy/DeleteCandyService';
import { CandyImageService } from '../services/candy/CandyImageService';
import { CandyReportService } from '../services/candy/CandyReportService';

class CandyController {

    async store(req: Request, res: Response) {
        const { filename: image } = req.file;
        const {
            name,
            quantity,
            price,
            category_id
        } =  req.body;
        const createCandyService = new CreateCandyService();
        const candy = await createCandyService.execute({
            name,
            quantity: +quantity,
            price: parseFloat(price),
            category_id: +category_id,
            image
        });

        return res.status(201).json(candy);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { filename: image } = req.file;
        const {
            name,
            quantity,
            price,
            category_id
        } =  req.body;

        const updateCandyService = new UpdateCandyService();
        const category = await updateCandyService.execute(id, {
            name,
            quantity: +quantity,
            price: parseFloat(price),
            category_id: +category_id,
            image
        });
    
        return res.json(category);
    }

    async index(req: Request, res: Response) {
        const getCandyService = new GetCandyService();
        const candies = await getCandyService.execute();

        return res.json(candies);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const getCandyByIdService = new GetCandyByIdService();
        const candy = await getCandyByIdService.execute(id);

        return res.json(candy);
    }

    async destroy(req: Request, res: Response) {
        const { id } = req.params;
        const deleteCandyService = new DeleteCandyService();
        await deleteCandyService.execute(id);

        return res.status(204).end();
    }

    async candyImage(req: Request, res: Response) {
        const filename = req.query.filename as string;
        const candyImageService = new CandyImageService();
        const candyImage = await candyImageService.execute(filename);

        return res.json(candyImage);
    }

    async report(req: Request, res: Response) {
        const candyReportService = new CandyReportService();
        const candyReport = await candyReportService.execute();
        return res.json(candyReport);
    }
}

export { CandyController };