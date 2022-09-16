import { prisma } from "../../../../database/prismaClient";

interface Recipe {
  title: string
  tags: string
  description: string
  information: string
  preparations: string
  ingredients: string
}

export class CreateRecipesUseCases {
  async execute({title, tags, description, information, preparations, ingredients}: Recipe) {

    const recipe = await prisma.recipes.create({
      data: {
        title,
        tags,
        description,
        information,
        preparations,
        ingredients
      }
    });

    return recipe;
  }
}


