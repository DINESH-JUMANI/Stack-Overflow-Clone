import jwt  from 'jsonwebtoken'

const auth =(req, res, next)=>{
    try {
        const token = req.headers?.authorization?.split(' ')[1] // extract token from header
        let decodeData = jwt.verify(token, process.env.JWT_SECRET)
        
        req.userId = decodeData?.id // update the request and add userId to it

        next()
    } catch (error) {
        console.log(error.message);
    }
}

export default auth