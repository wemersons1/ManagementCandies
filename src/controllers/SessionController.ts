import { Request, Response } from "express";
import { CreateSessionService } from "../services/session/CreateSessionService";

class SessionController {
    async store(req: Request, res: Response) {
        const { email, password } = req.body;
        const createSessionService = new CreateSessionService();
        const newSession = await createSessionService.execute({
            email,
            password
        });

        if(newSession) {
            return res.json(newSession);
        }

        return res.status(401).end();
    } 
    
    async destroy() {
        
    } 
}

export { SessionController }