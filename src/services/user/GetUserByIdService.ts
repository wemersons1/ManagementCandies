import { dbClient } from "../../dbClient"

class GetUserByIdService {
    async execute(id) {
      return await dbClient.user.findFirst({
          where: {
            id
          }
        });
    }
}

export { GetUserByIdService }