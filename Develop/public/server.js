const express = require('express');
const path = require('path');
fs = require('fs');

const app =  express();
const PORT = process.env.PORT || 3000;



    const paths = '../db/db.json';

    app.get('/api/notes',(req,res) =>{
        fs.readFile(paths, 'utf8',(err,data)=>{
        if(err){
            throw err;
        }
            res.send(JSON.parse(data))
        })
    })




app.use(express.urlencoded({ extended: true}));
app.use(express.json());
console.log(__dirname);
app.use("/assets",express.static(__dirname + '/assets'))



app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'index.html')));
app.get('/notes', (req,res)=> res.sendFile(path.join(__dirname,'notes.html')));





app.listen(PORT,()=> console.log(`App listening on PORT ${PORT}`));