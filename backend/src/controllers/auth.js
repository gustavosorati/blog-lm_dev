import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {db} from "../database/mysql.js";

export async function register(request, response) {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [request.body.email, request.body.username], (err, data) => {
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


export async function login(req, res) {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email =? OR username =?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...other } = data[0];

    // token 
    res.cookie("access_token", token, {
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
    });
    res.status(200).json(other);
  });
  });
}

export async function logout(request, res) {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.");
}
