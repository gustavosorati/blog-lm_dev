import { Router } from 'express';
import { AuthenticateUserController } from '../modules/account/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

// Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();


const userRoutes = Router();

userRoutes.post('/users/create', createUserController.handle);
userRoutes.post('/users/login', authenticateUserController.handle);

export { userRoutes };
