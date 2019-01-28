var DatabaseHelper = require("./core/DatabaseHelper")

var express = require('express');
var app = express();
var router = express.Router()
var path = __dirname + "/views/";
var bodyParser = require("body-parser")
var flash = require("connect-flash")
var passport = require("passport")
var session = require("express-session")
var questionController = require("./api/controllers/ChallengeController")
var sessionSecret = {
  secret: 'apsc',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}

require("./core/passport")
require("./api/models/User")
//to accept form values
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(session(sessionSecret))
//connect-flash
app.use(flash())

//to use passport and session
app.use(passport.initialize())
app.use(passport.session())
//to use static files
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + "/public/"));
//set the template engine
app.set('view engine', 'pug')
app.set('views', './views')

router.use('/api', require("./api/routes"))


router.use((req, res, next) => {
  console.log("/" + req.method);
  console.log("Body", req.body)
  next();
});

router.get("/", (req, res) => {
  res.render("index",{pageName:"loginPage"});
});

router.get("/dashboard", (req, res) => {
    questionController.getQuestionTitles(req,res)
}) 

router.get("/challenge/:id",(req,res) => {
  questionController.getQuestion(req.params.id , res);
})

router.get("/logout",(req,res)=>{
  res.render("index",{pageName:"loginPage"})
})
app.use("/", router);

app.use("*", function (req, res) {
  res.render("404");
});

app.listen(80, function () {
  console.log("Live at Port 3000");
});