import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    id: string;
}

const VerifyIfIsAuthenticated = (req: Request, res: Response, nextFunction: NextFunction) => {
    const authorizationToken = req.headers.authorization;

    if(!authorizationToken) {
        return res.status(401).end();
    }

    const [, token] = authorizationToken.split(' ');

    try {

        const decoded = verify(token, process.env.JWT_SECRET) as Payload;
        const { id: user_id } = decoded;
        if(user_id) {
            req.user_id = user_id;
            nextFunction();
        }

    }catch(error) {
        return res.status(401).end();
    }
}

export { VerifyIfIsAuthenticated }