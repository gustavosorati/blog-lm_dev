import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface User {
  name: string
  username: string
  password: string
  email: string
}

export class CreateUserUseCases {
  async execute({username, password, email, name}: User) {
    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    });

    if(userExists) throw new Error('User Already Exists');

    const hashPassword = await hash(password, 10)

    const user = await prisma.users.create({
      data: {
        username,
        password: hashPassword,
        email,
        name
      }
    })

    return user;
  }
}
