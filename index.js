const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors({
    origin: '*'
}))

app.use(express.json())

const {connection} = require("./config/db")




app.get("/",(req,res)=>{
    res.send("welcome")
})

const {userRoute}=require("./Routes/user.route")
app.use("/user",userRoute)





app.listen(3500,async()=>{
    try {
        await connection
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
    console.log("server running on port 3500")
})