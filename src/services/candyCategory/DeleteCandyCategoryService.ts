import { dbClient } from "../../dbClient";

class DeleteCandyCategoryService {
    async execute(id: number) {
        const candyCategory = await dbClient.candyCategory.findFirst({
            where: {
                id
            }
        });

        if(!candyCategory) {
            return null;
        }

        return await dbClient.candyCategory.delete({
                where: {
                    id
                }
            });
    }
}

export { DeleteCandyCategoryService }