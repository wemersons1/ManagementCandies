import { dbClient } from "../../dbClient";

class DeleteCandyService {
    async execute(id: string) {
        const candy = await dbClient.candy.findFirst({
            where: {
                id
            }
        });

        if(!candy) {
            throw new Error("Doce não encontrado");
        }

        return await dbClient.candy.delete({
                where: {
                    id
                }
            });
    }
}

export { DeleteCandyService }