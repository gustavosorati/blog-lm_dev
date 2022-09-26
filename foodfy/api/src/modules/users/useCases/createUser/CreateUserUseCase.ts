import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface User {
  name: string
  username: string
  password: string
  avatar_url: string;
}

export class CreateUserUseCase {
  async execute({username, password, avatar_url, name}: User) {
    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if(userExists) throw new Error('User Already Exists');

    const hashPassword = await hash(password, 10)

    const user = await prisma.users.create({
      data: {
        username,
        password: hashPassword,
        name,
        avatar_url
      }
    })

    return user;
  }
}
