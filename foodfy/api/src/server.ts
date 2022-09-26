import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/user';
import { recipesRoutes } from './routes/recipes';

const app = express();

app.use(cors());

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/users", authRouter);
app.use("/users", userRouter);
app.use("/recipes", recipesRoutes);

app.listen(3000, () => console.log("Server is running"));
