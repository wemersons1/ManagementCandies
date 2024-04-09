import { dbClient } from "../../dbClient";

class GetCandyByIdService {
    async execute(id: string) {

      const candy = await dbClient.candy.findFirst({
            where: {
                id
            }
        });

        if(!candy) {
          return null;
        }

        return await dbClient.candy.findFirst({
            where: {
              id
            }
          });
    }
}

export { GetCandyByIdService }