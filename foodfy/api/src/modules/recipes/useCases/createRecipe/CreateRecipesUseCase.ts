import { prisma } from "../../../../database/prismaClient";

interface Recipe {
  id_user: string;
  title: string
  description: string
  information: string
  preparations: string
  ingredients: string
}

export class CreateRecipesUseCase {
  async execute({ id_user, title, description, information, preparations, ingredients}: Recipe) {

    const recipe = await prisma.recipes.create({
      data: {
        userId: id_user,
        title,
        description,
        information,
        preparations,
        ingredients,
      }
    });

    return recipe;
  }
}


