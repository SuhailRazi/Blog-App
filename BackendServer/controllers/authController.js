import  jwt  from "jsonwebtoken";
import { db } from "../db.js";
import bcrypt from "bcrypt"; 

export const registerController = async (req,res) => {

    // if user Exist
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], async (err, data) => {
        if (err) {
         res.json({message : " Error at 11"})
      };
        if (data.length) {
         res.status(409).json("User already exists");
      }

        let newpassword = req.body.password.toString();

          // Hashing password
         const passwordsalt = bcrypt.genSaltSync(10);
         const hashed = await bcrypt.hash(newpassword, passwordsalt)
         const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?) ";
         const values = [
            req.body.username,
            req.body.email,
            hashed
         ]
         db.query(q,[values],(err,data)=>{
            if(err) res.json({message : " Error at 24"});
            res.status(200).json("user created");
         })
      });
    };

export const loginController = (req,res) =>{

   // If user exise
   const q = 'SELECT * from users WHERE username = ?'
   db.query(q,[req.body.username],(err,data)=>{
      if(err) res.json(err);
      if(data.length == 0) {
         return res.status(404).json("User does not exist");
      }

      // checking password
      const stringpassword = req.body.password.toString()
      const stringpassworddb = data[0].password.toString()
      const checkPassword = bcrypt.compareSync(stringpassword, stringpassworddb);

      if(!checkPassword) return res.status(400).json("Incorrect password or username");

      // creating access token
      const token = jwt.sign({ id:data[0].id }, "jwtkey" );
      const {password, ...other} = data[0]

      return res.cookie("acces_token",token,{
         httpOnly: true
      }).status(200).json(other);

   })

}

export const logoutController = (req,res) => {

   res.clearCookie("access_token",{
      sameSite: "none",
      secure: true
   }).status(200).json("user has been succesfully logged out")
}