var DatabaseHelper = require("./core/DatabaseHelper")

var express = require('express');
var app = express();
var router = express.Router()
var path = __dirname+"/views/";
var bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname+"/public/"));
app.set('view engine','pug')
app.set('views','./views')

router.use('/api',require("./api/routes"))

router.use((req,res,next)=>{
    console.log("/"+req.method);
    console.log("Body",req.body)
    next();
});

router.get("/",(req,res) =>{
    res.render("index");
  });
 
router.get("/dashboard",(req,res)=>{
    res.render("dashboard/index")
  })
app.use("/",router);

app.use("*",function(req,res){
  res.render("404");
});

app.listen(80,function(){
  console.log("Live at Port 3000");
});