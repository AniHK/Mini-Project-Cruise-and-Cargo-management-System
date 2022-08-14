//const mongoose = require("mongoose");
const express =require("express");
const path =require("path");
const app =express();
const hbs = require("hbs");
const puppeteer = require('puppeteer');


require("./db/conn");
const User = require('./models/userSchema');
const Customer =require('./models/custSchema');
const Admin = require("./models/adminSchema");
const Ad =require('./models/adSchema');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

const port =process.env.PORT || 2000;

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res) =>{
    res.render("cargo");
});

app.get('/register',(req,res) =>{
    res.render("register");
});

app.get('/login',(req,res) =>{
    res.render("login");
});

app.get('/customer',(req,res) =>{
    res.render("customer");
});

app.get('/admin',(req,res) =>{
    res.render("admin");
});

app.get('/lucifer',(req,res) =>{
    res.render("lucifer");
});

app.get("print.html",(req,res) =>{
    res.render("print.html");
});

app.post("/register",async(req,res) =>{
    try{
        const PASSWORD =req.body.PASSWORD;
        const CONFIRMPASSWORD=req.body.CONFIRMPASSWORD;
        if(PASSWORD === CONFIRMPASSWORD){
           const registerEmployee = new User({
              EMAIL:req.body.EMAIL,
               USERNAME:req.body.USERNAME,
                PASSWORD:req.body.PASSWORD,
                 CONFIRMPASSWORD:CONFIRMPASSWORD,
                  MOBILE:req.body.MOBILE,
                   DOB:req.body.DOB,
                    ADDRESS:req.body.ADDRESS
           })
          const registerd =await registerEmployee.save();
          res.status(201).render("cargo");
        }else{
          res.send("Password mismatch");
        }

    }catch(error){
      res.status(400).send(error);
    }
})

app.post('/login',async(req,res) =>{
    try{
        const email =req.body.email;
        const password =req.body.password;

        const useremail = await User.findOne({EMAIL:email});
        if(useremail.PASSWORD === password){
            //res.status(201).render("customer");

           if(useremail.is_admin == 1){
            res.status(201).render("admin");
           }
           else{
            res.status(201).render("customer");
           }

        }
        else{
            res.send("Invalid Login Details");
       }

    }catch(error){
        res.status(400).send("Invalid Login Credentials");
    }
});

app.post("/customer",async(req,res) =>{
    try{
        //const PASSWORD =req.body.PASSWORD;
        //const CONFIRMPASSWORD=req.body.CONFIRMPASSWORD;
        //if(PASSWORD === CONFIRMPASSWORD){
           const custDetails = new Customer({
              Sname:req.body.Sname,
               Goods:req.body.Goods,
                Location:req.body.Location,
                 Quantity:req.body.Quantity,
                  SPhone:req.body.SPhone,
                   Saddress:req.body.Saddress,
                    Rname:req.body.Rname,
                    Rmobile:req.body.Rmobile,
                    Remail:req.body.Remail,
                    Raddress:req.body.Raddress,
                    amount:req.body.amount
           })
          const details =await custDetails.save();
          res.status(201).render("customer");
        //else{
          //res.send("Error");
       // }

    }catch(error){
      res.status(400).send(error);
    }
})


app.post("/admin",async(req,res) =>{
    try{
        //const PASSWORD =req.body.PASSWORD;
        //const CONFIRMPASSWORD=req.body.CONFIRMPASSWORD;
        //if(PASSWORD === CONFIRMPASSWORD){
           const adminDetails = new Admin({
              Id:req.body.Id,
               Name:req.body.Name,
                CType:req.body.CType,
                 Dimension:req.body.Dimension,
                  No_of_container:req.body.No_of_container,
                   Quantity:req.body.Quantity,
                    Price:req.body.Price,
                    WarePlace:req.body.WarePlace
                    
           })
          const detail =await adminDetails.save();
          res.status(201).render("admin");
        //else{
          //res.send("Error");
       // }

    }catch(error){
      res.status(400).send(error);
    }
})


app.post("/lucifer",async(req,res) =>{
    try{
        //const PASSWORD =req.body.PASSWORD;
        //const CONFIRMPASSWORD=req.body.CONFIRMPASSWORD;
        //if(PASSWORD === CONFIRMPASSWORD){
           const ad = new Ad({
               Nam:req.body.Nam,
               id:req.body.id,
                CTyp:req.body.CTyp,
                 Dimensio:req.body.Dimensio,
                  No_of_containe:req.body.No_of_containe,
                   Quantit:req.body.Quantit,
                    Pric:req.body.Pric,
                    WarPlace:req.body.WarPlace
                    
           })
          const detai =await ad.save();
          res.status(201).render("lucifer");
        //else{
          //res.send("Error");
       // }

    }catch(error){
      res.status(400).send(error);
    }
})

app.get('/list', (req, res) => {
    Admin.find((err, docs) => {
        if (!err) {
            res.render("list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


app.get('/list', (req, res) => {
    Admin.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("admin", {
                viewTitle: "Update Admin",
                cargo: doc
            });
        }
    });
});

app.get('/list', (req, res) => {
    Admin.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});



app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
})



