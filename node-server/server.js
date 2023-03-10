const express = require("express"); //importing express module with name - express
let port = process.env.PORT || 9000; //use port 9000 unless there exists a preconfigured port

const cors = require("cors");

let app = express(); //instantiating express application
let defaultRouter = require("./routes/defaultRouter");

let userApp = express(); //different express instance
let userRouter = require("./routes/userRouter");

let studentApp = express();
let studentRouter = require("./Routes/studentRoute");

let hobbiesApp = express();
let hobbiesRouter = require("./Routes/hobbiesRouter");

let productsApp = express();
let productsRouter = require("./Routes/productsRouter");

let cartApp = express();
let cartRouter = require("./Routes/cartRouter");

app.use(cors()); //setting cross origin to top level express api
// serve static files like images css using static middleware
app.use("/static", express.static("public"));

//json middle-ware for setting request content type to json in body
app.use(express.json({ limit: "2mb", extended: false }));
app.use("/", defaultRouter);

app.use("/student", studentApp);
studentApp.use("/", studentRouter);

app.use("/hobbies", hobbiesApp);
hobbiesApp.use("/", hobbiesRouter);

app.use("/user", userApp); // localhost:9000/user/signinup
userApp.use("/", userRouter);

app.use("/product", productsApp);
productsApp.use("/", productsRouter);

app.use("/cart", cartApp);
cartApp.use("/", cartRouter);

//main application hosted to listen on 9000 port
app.listen(port, () => console.log(`server is listing as port ${port}`));
