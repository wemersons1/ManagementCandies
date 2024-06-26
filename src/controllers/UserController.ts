import { Request, Response } from "express";
import { CreateUserService } from '../services/user/CreateUserService';
import { GetUserByIdService } from "../services/user/GetUserByIdService";
import { UpdateUserService } from "../services/user/UpdateUserService";

class UserController {
    async store(req: Request, res: Response) {
        const userService = new CreateUserService();
        const newUser = await userService.execute(req.body);
        
        if(userService) {
            return res.json(newUser);
        }

        return res.status(401).end();
    }

    async me(req: Request, res: Response) {
        const getUserByIdService = new GetUserByIdService();
        const userLogged = await getUserByIdService.execute(req.user_id);
        
        return res.json(userLogged);
    }

    async meUpdate(req: Request, res: Response) {
        const updateUserService = new UpdateUserService();
        const user = await updateUserService.execute(req.user_id, req.body);

        return res.json(user)
    }
}

export { UserController };