import { dbClient } from "../../dbClient";

class GetCandyService {
    async execute() {
        const candies = await dbClient.candy.findMany();
        return candies;
    }
}

export { GetCandyService };