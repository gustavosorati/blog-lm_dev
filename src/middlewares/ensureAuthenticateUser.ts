import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  console.log(authHeader);
  if(!authHeader) return response.status(401).json({
    message: "Token missing"
  });

  const [ , token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "beac5f8171fcde5e2ec734cc5d25d03e7362e8de") as IPayload;

    request.id_user = sub;

    return next();

  } catch(err){
      return response.status(401).json({
          message: "Invalid token!"
      });
  }
}
