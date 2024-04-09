import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesStoreCandyRequest = [
    body('name').isString().notEmpty(),        
    body('quantity').isInt({ min: 0 }),
    body('price').isNumeric().notEmpty(),
    body('category_id').isInt({min: 0}).notEmpty(),    
];

class StoreCandyRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       

        nextFunction();
    }
}

export { rulesStoreCandyRequest, StoreCandyRequest };