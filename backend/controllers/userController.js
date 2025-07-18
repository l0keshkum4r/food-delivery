import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// LOGIN USER
export const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false,message:"User does not exist"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error ins user login"});
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

// REGISTER USER
export const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // CHECKING IF USER ALREADY EXISTS
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"});
        }

        // VALIDATING EMAIL FORMAT AND A STRONG PASSWORD
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Enter valid email"});
        }
        if (password.length < 8) {
            return res.json({success:false,message:"Please enter a strong password"});
        }

        // HASHING USER PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUSer = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUSer.save();
        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error in register user"});
    }
}