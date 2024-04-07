import { roles } from "../../src/constants/users_roles";
import { dbClient } from "../../src/dbClient"

async function main() {
   await dbClient.role.create({
        data: {
            id: roles.admin,        
            name: 'Admin'
        }
    });

    await dbClient.role.create({
        data: {
            id: roles.operator,        
            name: 'Operador'
        }
    });
}

main()
  .then(async () => {
    await dbClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await dbClient.$disconnect()
    process.exit(1)
  })
