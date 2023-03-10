console.log("This will be the entry point of my node api")

const express = require('express')

const app = express();//invoking top level function of express to return Express Application
const adminApp = express();//in one server we can have multiple express applications that can be delegated

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send(`<h1>Welcome to the world of ExpressJS and NODEMON as dev depedency</h1>`)
  })

app.get('/index', function (req, res) {
  res.sendFile(__dirname+"/Public/index.html")
})

// app.get('/public/alert.js', function (req, res) {
//   res.sendFile(__dirname+"/Public/alert.js")
// })
  
app.get('/name', function (req, res) {
    const _name = req.query["name"]

    res.send(`<h1>Name is ${ _name }</h1>`)
    })

//ading parameters passed through query string
app.get('/add', function (req, res) { //http://localhost:3000/add?v1=20&v2=30&v3=50
  const v1 = req.query["v1"]
  const v2 = req.query["v2"]
  const v3 = req.query["v3"]

  res.send(`<h1>Sum is - ${parseInt(v1) + parseInt(v2) }</h1> <h2>Third Query Param is - ${v3 }</h1>`)
})

//passing data in route params
app.get('/routeparam/:v1/:v2/:v3/add', function (req, res) { //http://localhost:3000/routeparam/20/30/50/add
  const v1 = req.params["v1"]
  const v2 = req.params["v2"]
  const v3 = req.params["v3"]

  res.send(`<h1>Sum is - ${parseInt(v1) + parseInt(v2) }</h1> <h2>Third Query Param is - ${v3 }</h1>`)
})

//mounting of application
app.use("/admin", adminApp);
adminApp.get("/hello",(req, res)=>{
    res.json({"message" : "Hello From Admin"})
})

//wild card operator to serve as default information/ fallback
// app.get('*', function (req, res) { 
  
//   res.sendFile(__dirname+"/Public/index.html")

// })

app.listen(3000)

console.log("express is listening on port localhost:3000")


//Practice - 8th Feb- 2023
//Create a student schema using mongoose with details like - Name, Session, Address, etc
//Use it to create mongoose model, within same database
//Use this student model to create an api with name save student
//In save student get the schema values from query string and save it to the mongodb using model.save
//In next call update the schema with new value - CurrentSession and save the same value to check that we can save different documents within same collection