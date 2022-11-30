const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
//ejs
app.set('view engine','ejs');

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Creating the Database
const { default: mongoose } = require("mongoose");
// connect with mongoose
// mongoose.connect("mongodb://localhost:27017/Codechef1",{useNewUrlParser:true});
const dbConnection = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/Codechef1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("successfully connected");
  } catch (err) {
    console.log(err);
  }
};
dbConnection();
// mongoose.connect("mongodb://localhost:27017/Codechef1",{useNewUrlParser:true});

// create schema
const userschema = new mongoose.Schema({
  rollno: {
    type: Number,
    unique: true,
    required: function () {
      return (this.rollno.length = 10);
    },
  },
  name: String,
  batch: String,
  role: String,
  message: {
    type: String,
    default: "-",
  },
  Password:{
    type:String,
    default: "-",
  },
  
});
//creating a model
const usermodel = mongoose.model("user", userschema);

//creating a new document
const user = new usermodel({
  name: "Amit Bhardwaj",
  batch: "2020-24",
  role: "vice President",
});

//end of database

//requests
app.get("/", async function (req, res) {
  res.sendFile(__dirname + "/Html/Verificationhome.html");
});
app.get("/2020071016Add", function (req, res) {
  res.sendFile(__dirname + "/Html/Add.html");
});



//catching the functionality of data
app.post("/", async function (req, res) {
  const Key = req.body.key;
  var check;
  if (mongoose.isValidObjectId(Key)) {
    check = await usermodel.findById(Key);
    // returns null if no record found.
  }
  //  var p=[{'name':'amit'},{'name':'akshat'}];
  if (check)  
  {
    //render ejs file
    res.render("form", {users: check });
  }
  else res.send("<h1>Not found in Database</h1>");
});

//add functionality
app.post("/2020071016Add", async function (req, res) {
  const Rollno = req.body.rollno,
    Name = req.body.name,
    Year = req.body.year,
    Role = req.body.role,
    Message = req.body.message,
    Password=req.body.Password;

    
    const user = new usermodel({
      rollno: Rollno,
      name: Name,
      batch: Year,
      role: Role,
      message: Message,
    });
  let IDPresent = await usermodel.findOne({ rollno: Rollno });
  let AdminId=await usermodel.findOne({_id :"637cc4ba0b50ed4c851b9612"});


  // check if password match with id and unique roll number length is 10 or not and if same roll number exist then redirect
  if( AdminId.Password!=Password || IDPresent || Rollno.length!=10) {
    console.log("directed to Add");
    res.redirect('/2020071016Add');
  }
  else {
    await user.save();
    let resDB =await usermodel.findOne({ rollno: Rollno });
      let id =resDB._id;
      // console.log(id);
      res.send(id);
  }
  res.send();
});

app.listen(3000, function () {
  console.log("http://localhost:3000");
});
