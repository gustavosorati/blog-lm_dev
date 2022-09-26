import { Request, Response } from "express";
import { CreateRecipesUseCase } from "./CreateRecipesUseCase";

export class CreateRecipeController {
  async handle(request: Request, response: Response){
    const { title, description, information, preparations, ingredients } = request.body;
    const { id_user } = request;


    const createRecipeUseCase = new CreateRecipesUseCase();
    const result = await createRecipeUseCase.execute({
      id_user,
      title,
      description,
      information,
      preparations,
      ingredients
    })

    return response.json(result);
  }
}
