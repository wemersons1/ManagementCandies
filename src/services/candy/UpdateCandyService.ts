import { dbClient } from "../../dbClient";

interface CandyInterface {
    name: string;
    quantity: number;
    image: string;
    price: number,
    category_id: number;
}

class UpdateCandyService {
    async execute(id: string, candyData: CandyInterface) {
        const Candy = await dbClient.candy.findFirst({
            where: {
                id
            }
        });

        if(!Candy) {
            throw new Error("Doce não encontrado");
        }

        return await dbClient.candy.update({
                where: {
                    id
                },
                data: candyData
            });
    }
}

export { UpdateCandyService };