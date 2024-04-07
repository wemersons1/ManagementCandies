import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesUpdateCategoryRequest = [
    body('name').isString().notEmpty(),
];

class UpdateCategoryRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       

        nextFunction();
    }
}

export { rulesUpdateCategoryRequest, UpdateCategoryRequest };