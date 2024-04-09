import { sign } from "jsonwebtoken";
import { dbClient } from "../../dbClient";
import { compare } from 'bcryptjs';

interface LoginInterface {
    email: string;
    password: string;
}

class CreateSessionService {
    async execute(loginData: LoginInterface) {
        const { email, password } = loginData;

        const user = await dbClient.user.findFirst({
            where: {
                email
            }
        });

        if(!user) {
            return null;
        }

        const passwordIsMatch = await compare(password, user.password);

        if(!passwordIsMatch) {
            return null;
        }

        const secret = process.env.JWT_SECRET;

        const token = sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, 
        secret , 
        { 
            subject: user.id, 
            expiresIn: '30d' 
        });

        return {
            user,
            token
        }
    }
}

export { CreateSessionService };