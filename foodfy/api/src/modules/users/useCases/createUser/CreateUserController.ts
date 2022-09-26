import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response){
    const { username, password, avatar_url, name } = request.body;

    const createUserUseCases = new CreateUserUseCase();
    const result = await createUserUseCases.execute({
      username,
      password,
      avatar_url,
      name
    });

    return response.json(result);
  }
}
