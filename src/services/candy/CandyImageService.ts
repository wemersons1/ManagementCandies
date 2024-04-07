import fs from 'fs';
import path from 'path';

class CandyImageService {

    async execute(filename: string) {
        return await this.readImage(filename);
    }

    async readImage(filename: string) {
        const directoryBase = path.resolve();
        const pathName = `${directoryBase}/uploads/${filename}`;
        return new Promise((resolve, reject) => {
        // Ler a imagem como um buffer
            fs.readFile(pathName, (err, buffer) => {
                if (err) {
                reject(err);
                } else {
                // Retornar o buffer como base64
                    resolve(buffer.toString('base64'));
                }
            });
        });
    }
  
}

export { CandyImageService };