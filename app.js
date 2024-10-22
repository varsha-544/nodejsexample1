const express = require('express');
const app = express();
app.get('/',(req,req)=>{
res.send("Hello World,I am from Nodejs");
});
app.listen(3020,()=>{
console.log("Server is running on port 3020")
});