import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';
import 'express-async-errors';
import cors from 'cors';
import path from 'path'

dotenv.config();
const port = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'uploads'))
  )

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    //Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});