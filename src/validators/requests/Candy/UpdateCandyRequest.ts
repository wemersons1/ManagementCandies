import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesUpdateCandyRequest = [
    body('name').optional().isString(),        
    body('quantity').optional().isInt({ min: 0 }),
    body('price').optional().isNumeric(),
    body('category_id').optional().isInt({min: 0}),    
];

class UpdateCandyRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       

        nextFunction();
    }
}

export { rulesUpdateCandyRequest, UpdateCandyRequest };