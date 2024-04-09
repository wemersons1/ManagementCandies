import fs from 'fs';
import path from 'path';

class CandyImageService {

    async execute(filename: string) {
        const directoryBase = path.resolve();
        const pathName = `${directoryBase}/uploads/${filename}`;
    
        if(!filename || !fs.existsSync(pathName)) {               
            return '';
         }

        const candy_image = await this.readImage(pathName);
        
        return {
            candy_image
        };
    }

    async readImage(pathName: string) {
        
        return new Promise((resolve, reject) => {
            fs.readFile(pathName, (err, buffer) => {
                if (err) {
                reject(err);
                } else {
                // Retornar o buffer como base64
                    resolve(`data:;base64,${buffer.toString('base64')}`);
                }
            });
        });
    }
}

export { CandyImageService };