var express = require('express');
var app = express();
var router = express.Router()
var path = __dirname+"/views/";

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname+"/public/"));

router.use((req,res,next)=>{
    console.log("/"+req.method);
    next();
});

router.get("/",(req,res) =>{
    res.sendFile(path + "index.html");
  });
 
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80,function(){
  console.log("Live at Port 3000");
});