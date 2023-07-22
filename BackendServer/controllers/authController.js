import { db } from "../db.js";
import bcrypt from "bcrypt"; 

export const registerController = async (req,res) => {

    // if user Exist
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], async (err, data) => {
        if (err) res.json({message : " Error at 11"});
        if (data.length) res.status(409).json("User already exists");

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

}

export const logoutController = (req,res) => {

}