const express= require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(express.static("public"));
var items=[];
app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    var today = new Date();
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{KindOfDay:day,fu:items});
});

app.post("/",(req,res)=>{
  var item = req.body.newItem;
  items.push(item)
  res.redirect("/");
})

app.listen(3000,()=>{
    console.log("server started on port 3000");
});