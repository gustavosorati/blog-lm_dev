import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateUser {
  username: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        username
      }
    });

    if(!user) throw new Error("Username or password invalid!");

    const passwordMacth = await compare(password, user.password);

    if(!user) throw new Error("Username or password invalid!");

    const token = sign({ username }, 'beac5f8171fcde5e2ec734cc5d25d03e7362e8de', {
      subject: user.id,
      expiresIn: '1d'
    });

    return token;
  }
}
