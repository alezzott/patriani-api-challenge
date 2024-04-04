import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { enterpriseRoutes } from './routes/enterpriseRoutes';
import { validationMiddleware } from './middlewares/validationMiddleware';
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(bodyParser.json());
app.use('/empreendimentos', enterpriseRoutes);
app.use(validationMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
