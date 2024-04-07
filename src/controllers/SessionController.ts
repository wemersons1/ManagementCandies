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

        return res.json(newSession);
    } 
    
    async destroy() {
        
    } 
}

export { SessionController }