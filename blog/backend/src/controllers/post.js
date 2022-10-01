import jwt from "jsonwebtoken";
import {db} from "../database/mysql.js";


export function getPosts(request, response) {

  const q = request.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query(q, [request.query.cat], (err, data) => {
    if (err) return response.status(500).json(err);

    return response.status(200).json(data);
  });
}

export function getPost(request, response) {
  const {id} = request.params;

  const q = "SELECT `username`, `title`, `desc`, p.id, p.img, u.img AS user_img, `cat`, `date` FROM users u JOIN posts p ON u.id=p.user_id WHERE p.id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return response.status(500).json(err);

    return response.status(200).json(data[0]);
  });
}

export function addPost(request, response) {
  const q = "INSERT INTO posts(`title`, `desc`, `img`, `date`, `cat`, `user_id`) VALUES (?)";

    const values = [
      request.body.title,
      request.body.desc,
      request.body.img,
      request.body.date,
      request.body.cat,
      request.body.user_id,
    ];

    db.query(q, [values], (err, data) => {
      console.log(err)
      if (err) return response.status(500).json(err);



      return response.json("Post has been created.");
    });
  
  
  // DON'T WORK WITH REQ.COOKIES
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  //   const q =
  //     "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

  //   const values = [
  //     req.body.title,
  //     req.body.desc,
  //     req.body.img,
  //     req.body.cat,
  //     req.body.date,
  //     userInfo.id,
  //   ];

  //   db.query(q, [values], (err, data) => {
  //     if (err) return res.status(500).json(err);
  //     return res.json("Post has been created.");
  //   });
  // });
  
}

export function updatePost(request, response) {
  const postId = request.params.id;

  const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `user_id` = ?";

  const values = [
    request.body.title,
    request.body.desc,
    request.body.img,
    request.body.cat,
  ];

  db.query(q, [...values, postId, request.body.user_id], (err, data) => {
    console.log(err)
    if (err) return response.status(500).json(err);

    return response.json("Post has been updated.");
  });
}

export function deletePost(request, response) {
  const token = request.cookies.access_token;

  if(!token) return response.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    
    const postId = request.params.id;
    const q = "DELETE * FROM POSTS WHERE `id` = ? AND `user_id` = ?"

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return response.status(403).json("You can delete only your posts!");

      return response.status(200).json('Post has been deleted!');
    });
  });
}