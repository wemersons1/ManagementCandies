import { Request, Response } from 'express';
import { CreateCandyCategoryService } from '../services/candyCategory/CreateCandyCategoryService';
import { UpdateCandyCategoryService } from '../services/candyCategory/UpdateCandyCategoryService';
import { GetCandyCategoryService } from '../services/candyCategory/GetCandyCategoryService';
import { GetCandyCategoryByIdService } from '../services/candyCategory/GetCandyCategoryByIdService';
import { DeleteCandyCategoryService } from '../services/candyCategory/DeleteCandyCategoryService';

class CandyCategoryController {

    async store(req: Request, res: Response) {
        const { name } = req.body;
        const createCandyCategoryService = new CreateCandyCategoryService();
        const candyCategory = await createCandyCategoryService.execute({name});

        return res.status(201).json(candyCategory);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name } = req.body;
        const updateCandyCategoryService = new UpdateCandyCategoryService();
        const candyCategory = await updateCandyCategoryService.execute(+id, {name});
    
        return res.json(candyCategory);
    }

    async index(req: Request, res: Response) {
        const getCandyCategoryService = new GetCandyCategoryService();
        const candiesCategory = await getCandyCategoryService.execute();

        return res.json(candiesCategory);
    }

    async show(req: Request, res: Response) {
        const { id } = req.params;
        const getCandyCategoryByIdService = new GetCandyCategoryByIdService();
        const candyCategory = await getCandyCategoryByIdService.execute(+id);

        return res.json(candyCategory);
    }

    async destroy(req: Request, res: Response) {
        const { id } = req.params;
        const deleteCandyCategoryService = new DeleteCandyCategoryService();
        await deleteCandyCategoryService.execute(+id);

        return res.status(204).end();
    }
}

export { CandyCategoryController };