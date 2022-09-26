import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// interface IPayload {
//   sub: string;
// }
interface MyToken {
  user: {
    id: string,
    username: string,
    name: string,
    avatar_url: string,
    is_admin: boolean,
  },
  iat: number,
  exp: number,
  sub: string
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) return response.status(401).json({
    message: "Token missing"
  });

  const [ , token] = authHeader.split(" ");

  try {
    const decoded = verify(token, "beac5f8171fcde5e2ec734cc5d25d03e7362e8de") as MyToken

    // const { sub } = verify(token, "beac5f8171fcde5e2ec734cc5d25d03e7362e8de") as IPayload;

    request.id_user = decoded.sub;
    request.is_admin = decoded.user.is_admin

    return next();

  } catch(err){
      return response.status(401).json({
          message: "Invalid token!"
      });
  }
}
