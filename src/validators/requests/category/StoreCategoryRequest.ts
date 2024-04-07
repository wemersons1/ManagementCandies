import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesStoreCategoryRequest = [
    body('name').isString().notEmpty(),
];

class StoreCategoryRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       

        nextFunction();
    }
}

export { rulesStoreCategoryRequest, StoreCategoryRequest };