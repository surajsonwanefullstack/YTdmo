const express = require("express")
const app = express()
app.get("/",(req,res)=>{
res.send("server is working fine")
})

app.listen(8001,()=>{
console.log("server is up and running at 8001 port")
})
