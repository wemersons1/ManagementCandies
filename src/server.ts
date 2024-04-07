import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';
import 'express-async-errors';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
    if(err instanceof Error) {
        res.status(400).json({
            "status": "error",
            "message": err.message
        });
    }
    res.status(500).json({
        "status": "error",
        "message": "Internal server error"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});