import { Request, Response } from "express";
import { CreateUserUseCases } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response){
    const { username, password, email, name } = request.body;

    const createUserUseCases = new CreateUserUseCases();
    const result = await createUserUseCases.execute({
      username,
      password,
      email,
      name
    });

    return response.json(result);
  }
}
