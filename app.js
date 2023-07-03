const express=require('express');
const { createConnection } = require('mysql2');
const app=express();
app.use(express.json())
const mysql=require('mysql2')
const bcrypt=require('bcrypt')
const cors=require('cors')
app.use(cors())



const db= mysql.createPool({
   host: "localhost",      
   user: "root",        
   password: "root", 
   database: "quiz",   
   port: "3306"             
})

db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful " )
})

app.listen(8010,()=>{
    console.log("running at port 8010")
})

const createtable='create table user (id int(5) auto_increment primary key , username varchar(50),password varchar(500))'; //creating table
//const altercolumn='alter table user modify column password varchar(500)'; // alter the size of the column
const registertable='create table registerusers(id int(5) auto_increment primary key,firstname varchar(50),lastname varchar(50),email varchar(50),password varchar(50),mobile int(50))'
const logintable='create table loginusers(id int(5) auto_increment primary key,email varchar(50),password varchar(50))';
const quiztable='create table quiz(id int(5)  primary key,question varchar(200), option1 varchar(30),option2 varchar(30),answer varchar(500)) '
app.get('/table',(req,res)=>{
    db.query(quiztable,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
            console.log('table created')
        }
    })
})

app.post('/register',(req,res)=>{
    console.log(req.body)
   const firstname=req.body.firstname;
   const lastname=req.body.lastname;
   const email=req.body.email;
   const password=req.body.password;
   const mobile=req.body.mobile;
   db.query('insert into registerusers (firstname,lastname,email,password,mobile) values(?,?,?,?,?)',[firstname,lastname,email,password,mobile],(err,result)=>{
    if(err)
    {
        console.log("err"+JSON.stringify(err))
    }
    else{
        res.json(result);
        // console.log(result);
    }
   })
})



app.get('/registeruser',(req,res)=>{
    db.query('select * from registerusers',(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
            // console.log(result)
        }
    })  
})
// app.put('/update',async(req,res)=>{
//     const update='update table user '
//     db.query()
// })

app.post('/loginuser',async(req,res)=>{
    // console.log(req.body)
    const loginusername=req.body.username;
    //const password=await bcrypt.hash(req.body.password,10);
    const password=req.body.password;
    console.log(password)
     db.query('insert into user (username,password) values(?,?)',[loginusername,password],(err,result)=>{
         if(err)
         {
             console.log("err"+JSON.stringify(err))
         }
         else{
             res.json(result);
             console.log(result);
         }
     })
 })

 app.post('/quizquestions',async(req,res)=>{
   
    const records=req.body;
    records.forEach((record) => {
        const query = 'insert into quiz (id,question ,option1,option2, answer) values (?,?,?,?,?)';
        const values = [record.id,record.question, record.option1,record.option2,record.answer];
       // console.log(values)
    
    db.query(query,values,(err,result)=>{

        if(err)
        {
            console.log("err"+JSON.stringify(err))
        }
        else{
            res.json(result);
            console.log(result);
        }
    })
})
 })

 app.get('/getquizquestions',(req,res)=>{
    db.query('select * from quiz ',(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
            //console.log(result)
        }
    })
 })