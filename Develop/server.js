const express = require('express');
const path = require('path');
fs = require('fs');
const db = require( './db/db.json');
const app =  express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'public/index.html')));
app.get('/notes', (req,res)=> res.sendFile(path.join(__dirname,'public/notes.html')));


app.get('/api/notes',()=>res.json(db))


app.post(db, (req,res) =>{

    const newNotes = req.body;

    //.push(newNotes)
    res.json(newNotes);

    })




app.listen(PORT,()=> console.log(`App listening on PORT ${PORT}`));