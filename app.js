const express = require("express")
const app  = express()
app.set ('view engine','ejs')
// middleware
app.use('/assets', express.static('assets'))
app.use(express.urlencoded({extended:true}));
// home route
app.get ('/',(req,res)=>{
    res.render ('index')
})

//addblogs
app.get("/addblogs",(req,res)=>{
    res.render('addblogs',{username:"cele"})
})
// success
app.post('/success',(req,res)=>{
    console.log(req.body)
    res.render('success')
})

//class work: hand login and register get routes
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('register')
})

//listener
const port =3000

app.listen(port,()=>{
    console.log(`App started on port 3000 ${port}`);
})