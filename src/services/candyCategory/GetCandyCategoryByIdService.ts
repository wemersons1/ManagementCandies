import { dbClient } from "../../dbClient";

class GetCandyCategoryByIdService {
    async execute(id: number) {
        return await dbClient.candyCategory.findFirst({
            where: {
              id
            }
          });
    }
}

export { GetCandyCategoryByIdService }