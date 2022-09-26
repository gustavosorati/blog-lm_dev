import { Router } from 'express';
import { AuthenticateUserController } from '../modules/account/authenticateUser/AuthenticateUserController';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';

// Controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();


const router = Router();

router.post('/create', createUserController.handle);
router.post('/login', authenticateUserController.handle);

export { router as authRouter };
