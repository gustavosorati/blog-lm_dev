import { Router } from 'express';
import { AuthenticateUserController } from '../modules/account/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

// Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();


const userRoutes = Router();

userRoutes.post('/create', createUserController.handle);
userRoutes.post('/login', authenticateUserController.handle);

export { userRoutes };
