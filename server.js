const { json } = require('express');
const express = require('express');
const path = require('path');
const { stringify } = require('querystring');
const paths = './db/db.json';

const datas = require(paths);
fs = require('fs');

const app =  express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/api/notes',(req,res) =>{
        fs.readFile(paths, 'utf8',(err,data)=>{
        if(err){
            throw err;
        }
            res.send(JSON.parse(data))
        })
    })



    const datatree =[];


app.post('/api/notes', (req,res) =>{
     datatree.push(req.body);

    fs.readFile(paths,'utf8',(err,data)=>{
        if(err){
        throw err;
        }   
        fs.writeFile(paths,JSON.stringify(datatree),(err,data)=>{
            if(err){
                    throw err;
            }      
            console.log("something written");
        });
    })  

    res.redirect('back')
})



app.use(express.static(__dirname + '/public'))




app.get('/notes', (req,res)=> res.sendFile(path.join(__dirname,'public/notes.html')));



app.get('*',(req,res)=> res.sendFile(path.join(__dirname,'public/index.html')));

app.listen(PORT,()=> console.log(`App listening on PORT ${PORT}`));