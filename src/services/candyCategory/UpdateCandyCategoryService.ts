import { dbClient } from "../../dbClient";

interface CandyCategoryInterface {
    name: string;
}

class UpdateCandyCategoryService {
    async execute(id: number, categoryData: CandyCategoryInterface) {
        const { name } = categoryData;
        const candyCategory = await dbClient.candyCategory.findFirst({
            where: {
                id
            }
        });

        if(!candyCategory) {
            return null;
        }

        return await dbClient.candyCategory.update({
                where: {
                    id
                },
                data: {
                    name
                }
            });
    }
}

export { UpdateCandyCategoryService };