import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';
import {db} from "../database/mysql";

type IUser = RowDataPacket & {
  id?: number;
  username: string;
  email: string;
  password: string;
  img: string;
}

export async function register(request: Request, response: Response) {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query<IUser[]>(q, [request.body.email, request.body.username], (err, data) => {
    if (err) return response.status(500).json(err);
    if (data.length) return response.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(request.body.password, salt);

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [request.body.username, request.body.email, hash];
    db.query(q, [values], (err, data) => {
      if (err) return response.status(500).json(err);
      return response.status(200).json("User has been created.");
    });
  });
};

export async function login(request: Request, response: Response) {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email =? OR username =?";

  db.query<IUser[]>(q, [request.body.email, request.body.username], (err, data) => {
    const q = "SELECT * FROM users WHERE username = ?";

    db.query<IUser[]>(q, [request.body.username], (err, data) => {
      if (err) return response.status(500).json(err);
      if (data.length === 0) return response.status(404).json("User not found!");

      // CHECK PASSWORD
      const isPasswordCorrect = bcrypt.compareSync(
        request.body.password,
        data[0].password
      );

      if (!isPasswordCorrect) return response.status(400).json("Wrong username or password!");

      // CREATE TOKEN WITH ID
      const token = jwt.sign({ id: data[0].id }, "jwtkey");

      const { password, ...other } = data[0];

    // SEND TOKEN TO FRONTEND 
      response.cookie("access_token", token, {
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        httpOnly: true,
      });
      response.status(200).json(other);
    });
  });
};

export async function logout(request: Request, response: Response) {
  response.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.");
};
