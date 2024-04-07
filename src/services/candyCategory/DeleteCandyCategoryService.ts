import { dbClient } from "../../dbClient";

class DeleteCandyCategoryService {
    async execute(id: number) {
        const candyCategory = await dbClient.candyCategory.findFirst({
            where: {
                id
            }
        });

        if(!candyCategory) {
            throw new Error("Categoria não encontrada");
        }

        return await dbClient.candyCategory.delete({
                where: {
                    id
                }
            });
    }
}

export { DeleteCandyCategoryService }