const jwt=require("jsonwebtoken")

const auhenticate=async(req,res,next)=>{
    try {
        
const token=req.headers.authorization
if(token){
    const verify=jwt.verify(token,"key")
    if(verify){
        const userId=verify.userId
        req.body.userId=userId
        next()
    }else{
        console.log("error in login")
        res.send("invalid token")
    }
}

    } catch (error) {
        res.json("inavalid")
        console.log(error)
    }
}

module.exports={auhenticate}