import jwt from 'jsonwebtoken'

const protect = (req,res,next)=>{
    const token = req.header('Authorization')?.split('')[1];
    if(!token){
        return res.status(401).json({message:"Not authorized, no token"});
    }

    try{
        jwt.verify(token,process.env.JWT_SECRET)
            req.user = decoded.id;
            next();
        }catch(error){
            res/statis(401).json({message:"Token invalid or expired"})        
    }
}

export default protect;