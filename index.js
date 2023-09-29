const express= require("express");
const path = require('path');
const app=express();
const homeRoutes = require('./routes/homeRoutes')




app.use(express.json()) //they must be in use when we are getting json datas
app.use(express.urlencoded({extended: false}));//they must be in use when we are using form in our html
app.use(express.static(path.join(__dirname, "/public")));

app.use('/', homeRoutes)



const PORT= 3200 || process.env.PORT
app.listen(PORT, ()=>{
    console.log("my new app has started on " + PORT);
})