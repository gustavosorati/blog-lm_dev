import 'express-async-errors';
import express from 'express';
import { userRoutes } from './routes/users';

const app = express();

app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => console.log("Server is running"));
