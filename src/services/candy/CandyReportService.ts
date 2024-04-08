import { connection } from "../../dbClient/mysql";

class CandyReportService {
    async execute() {
        return {
            total_by_category: await this.getTotalByCategory(),
            total_candies: await this.getTotalCandiesRegistered(),
        };
    }

    async getTotalByCategory() {
        const sql = "SELECT cc.name as category, COUNT(1) as total FROM candies as c inner join candies_category as cc on cc.id = c.category_id group by c.category_id";
        return new Promise((resolve, reject) => {
                connection.query(sql, (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }
                   
                    resolve(results[0]);
                  });
            });
    }

    async getTotalCandiesRegistered() {
        const sql = "SELECT COUNT(1) as total FROM candies";
        return new Promise((resolve, reject) => {
                connection.query(sql, (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }
                   
                    resolve(results[0].total);
                  });
            });
    }

}

export { CandyReportService };