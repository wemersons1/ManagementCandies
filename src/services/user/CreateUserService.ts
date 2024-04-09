import { roles } from "../../constants/users_roles";
import { dbClient } from "../../dbClient";
import { hash } from 'bcryptjs';

interface UserInteface {
    name: string;
    email: string,
    password: string
}

class CreateUserService {
    async execute(userData: UserInteface) {
        const { name, email, password } = userData;
        const userAlreadExist = await dbClient.user.findFirst({
            where: {
                email
            }
        });

        if(userAlreadExist) {
            return null;
        }
        
        const passwordHash = await hash(password, 8);
        return dbClient.user.create({
            data: {
                name,
                email,
                password: passwordHash,
                role_id: roles.admin
            }
        });
    }
}

export { CreateUserService }