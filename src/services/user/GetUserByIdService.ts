import { dbClient } from "../../dbClient"

class GetUserByIdService {
    async execute(id: string) {
      return await dbClient.user.findFirst({
          where: {
            id
          }
        });
    }
}

export { GetUserByIdService }