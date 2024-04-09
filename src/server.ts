import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import qs from 'qs';

dotenv.config();
const port = process.env.APP_PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(router);
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'uploads'))
  );

app.set('query parser', function (str: any) {
  return qs.parse(str, { /* custom options */ })
})

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