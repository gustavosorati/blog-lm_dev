import { Router } from 'express';
import { AuthenticateUserController } from '../modules/account/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

// Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();


const router = Router();

router.get('/', createUserController.handle);

export { router as userRouter };
