import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorised Login Again"});
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.is;
        next();
    } catch (error) {
        console.log(error);
        res.json({seccess:false,message:"Error in auth middleware"});
    }

}

export default authMiddleware;