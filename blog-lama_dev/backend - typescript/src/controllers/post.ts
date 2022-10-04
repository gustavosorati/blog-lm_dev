import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { RowDataPacket } from "mysql2";
import {db} from "../database/mysql";

type IPost = RowDataPacket & {
  id?: number;
  title: string;
  desc: string;
  img: string;
  date: Date;
  cat: string;
  user_id: number;
}

type MyToken = {
  id: string;
}

export function getPosts(request: Request, response: Response) {
  const category = request.query.cat;

  const q = category ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query<IPost[]>(q, [request.query.cat], (err, data) => {
    if (err) return response.status(500).json(err);

    return response.status(200).json(data);
  });
}

export function getPost(request: Request, response: Response) {
  const {id} = request.params;

  const q = "SELECT `username`, `title`, `desc`, p.id, p.img, u.img AS user_img, `cat`, `date` FROM users u JOIN posts p ON u.id=p.user_id WHERE p.id = ?";

  db.query<IPost[]>(q, [id], (err, data) => {
    if (err) return response.status(500).json(err);

    return response.status(200).json(data[0]);
  });
}

export function addPost(request: Request, response: Response) {
  // GET TOKEN ON FRONTEND
  const token = request.cookies.access_token;
  if (!token) return response.status(401).json("Not authenticated!");

  // CHECK VALIDATION TOKEN
  const tokenDecoded = jwt.verify(token, "jwtkey") as MyToken;

  if(!tokenDecoded) return response.status(403).json("Token is not valid!");
  
  // CREATE POST PASSING userInfo.id
  const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`user_id`) VALUES (?)";
   
  const values = [
    request.body.title,
    request.body.desc,
    request.body.img,
    request.body.cat,
    request.body.date,
    tokenDecoded.id,
  ]; 
   
  db.query<IPost[]>(q, [values], (err, data) => {
    if (err) return response.status(500).json(err);
    return response.json("Post has been created.");
  });  
}

export function updatePost(request: Request, response: Response) {
  const token = request.cookies.access_token;

  if (!token) return response.status(401).json("Not authenticated!");

  const tokenDecoded = jwt.verify(token, "jwtkey") as MyToken;

  if(!tokenDecoded) return response.status(403).json("Token is not valid!");

  // ALL RIGHT UPDATE TOKEN
  const postId = request.params.id;

  const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `user_id` = ?";

  const values = [
    request.body.title,
    request.body.desc,
    request.body.img,
    request.body.cat,
  ];

  db.query<IPost[]>(q, [...values, postId, tokenDecoded.id], (err, data) => {
    if (err) return response.status(500).json(err);

    return response.json("Post has been updated.");
  });
}

export function deletePost(request: Request, response: Response) {
  const token = request.cookies.access_token;

  if (!token) return response.status(401).json("Not authenticated!");

  const tokenDecoded = jwt.verify(token, "jwtkey") as MyToken;

  if(!tokenDecoded) return response.status(403).json("Token is not valid!");
 
  const postId = request.params.id;

  const q = "DELETE * FROM POSTS WHERE `id` = ? AND `user_id` = ?"

  db.query(q, [postId, tokenDecoded.id], (err, data) => {
    if (err) return response.status(403).json("You can delete only your posts!");

    return response.status(200).json('Post has been deleted!');
  });
}