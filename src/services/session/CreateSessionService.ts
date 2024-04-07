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
            throw new Error("Usuário ou senha inválidos");
        }

        const passwordIsMatch = compare(password, user.password);

        if(!passwordIsMatch) {
            throw new Error("Usuário ou senha inválidos");
        }

        const secret = process.env.JWT_SECRET;

        const token = sign({
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