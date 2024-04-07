import { dbClient } from "../../dbClient";

interface CandyCategoryInterface {
    name: string;
}

class CreateCandyCategoryService {
    async execute(categoryData: CandyCategoryInterface) {
        const { name } = categoryData;
        return await dbClient.candyCategory.create({
                data: {
                    name
                }
            });
    }
}

export { CreateCandyCategoryService };