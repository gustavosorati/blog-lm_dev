import 'express-async-errors';
import express from 'express';
import { userRoutes } from './routes/users';
import { recipesRoutes } from './routes/recipes';

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/recipes", recipesRoutes);

app.listen(3000, () => console.log("Server is running"));
