import { roles } from "../../constants/users_roles";
import { dbClient } from "../../dbClient";
import { hash } from 'bcryptjs';

interface UserInteface {
    name: string;
    email: string,
    password: string
}

class UpdateUserService {
    async execute(id: string, userData: UserInteface) {
        const { name, email, password } = userData;
        
        const user = await dbClient.user.findFirst({
            where: {
                id
            }
        });

        if(!user) {
            throw new Error("Usuário não encontrado");
        }

        let data = {
            name,
            role_id: roles.admin
        }

        if(email != user.email) {
            data['email'] = email;
        }
        
        if(userData.password) {
            const passwordHash = await hash(password, 8);
            data['password'] = passwordHash;
        }

        return await dbClient.user.update({
            where: {
                id
            },
            data
        });
    }
}

export { UpdateUserService }