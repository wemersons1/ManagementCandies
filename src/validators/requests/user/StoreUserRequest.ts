import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const rulesStoreUserRequest = [
    body('name').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password_confirmation').isString().notEmpty().isLength({ min: 8}),
    body('password').isString().notEmpty().isLength({ min: 8})
];

class StoreUserRequest {
    async handle(req: Request, res: Response, nextFunction: NextFunction) {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }       

        nextFunction();
    }
}

export { rulesStoreUserRequest, StoreUserRequest };