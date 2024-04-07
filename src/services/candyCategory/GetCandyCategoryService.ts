import { dbClient } from "../../dbClient";

class GetCandyCategoryService {
    async execute() {
        const candyCategories = await dbClient.candyCategory.findMany();
        return candyCategories;
    }
}

export { GetCandyCategoryService };