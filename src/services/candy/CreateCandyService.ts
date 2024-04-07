import { dbClient } from "../../dbClient";

interface CandyInterface {
    name: string;
    quantity: number;
    image: string;
    price: number,
    category_id: number;
}

class CreateCandyService {
    async execute(candyData: CandyInterface) {
        return await dbClient.candy.create({
                data: candyData
            });
    }
}

export { CreateCandyService };