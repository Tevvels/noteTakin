const { json } = require('express');
const express = require('express');
const path = require('path');
const { stringify } = require('querystring');
const paths = '../db/db.json';

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

    app.get('/api/notes/:note',(req,res) =>{
        const chosen = req.params.note;
        console.log(chosen);
    })

    //cd develop/public

    const datatree =[];
    datatree.push(datas)

app.post('/api/notes', (req,res) =>{

    console.log(datas)

     datatree.push(req.body);
     res.json(true)
    // console.log(datatree)
    fs.readFile('./assets/js/index.js','utf8',(err,data)=>{
        if(err){
            throw err;
        }
        console.log((data.activeNote))
        fs.writeFile(paths,JSON.stringify(datatree),(err,data)=>{
            if(err){
                    throw err;
            }
           
            console.log("something written");
        });
    })  

    res.redirect('back')
})

app.use("/assets",express.static(__dirname + '/assets'))



app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'index.html')));

app.get('/notes', (req,res)=> res.sendFile(path.join(__dirname,'notes.html')));





app.listen(PORT,()=> console.log(`App listening on PORT ${PORT}`));