import { dbClient } from "../../dbClient";

interface CandyInterface {
    name: string;
    quantity: number;
    image: any;
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
            return null;
        }

        const data = {};
        data['name'] = candyData.name;
        data['quantity'] = candyData.quantity;
        data['price'] = candyData.price;
        data['category_id'] = candyData.category_id;
     
        if(candyData.image) {
            data['image'] = candyData.image;
        }

        return await dbClient.candy.update({
                where: {
                    id
                },
                data
            });
    }
}

export { UpdateCandyService };