import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Coasters' },
  { id: 3, name: 'Planters' },
  { id: 4, name: 'Candles' },
  { id: 5, name: 'Clocks' },
  { id: 6, name: 'Jewelry' },
];

app.get('/api/categories', (req: Request, res: Response) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
