import { db } from "../db.js";
import  bcrypt  from "bcryptjs";

export const registerController = (req,res) => {

    // if user Exist
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.username],(err,data)=>{
        if(err) res.json(err);
        if(data.length) res.status(409).json("user already exist");

        // Hashing password
        const  salt= bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email,`password`) VALUES (?) ";
        const values = [
            req.body.username,req.body.email, hash
        ]
        db.query(q,[values],(err,data)=>{
            if(err) res.json(err)
            res.status(200).json(`User registred succesfully ${data.username}`);
        })

    })

}


export const loginController = (req,res) =>{

}

export const logoutController = (req,res) => {

}