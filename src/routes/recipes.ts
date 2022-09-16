import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/EnsureAuthenticateUser';
import { CreateRecipeController } from '../modules/recipes/useCases/createRecipe/CreateRecipeController';

// Controllers
const createRecipeController = new CreateRecipeController();


const recipesRoutes = Router();

recipesRoutes.post('/create', ensureAuthenticateClient, createRecipeController.handle);

export { recipesRoutes };
