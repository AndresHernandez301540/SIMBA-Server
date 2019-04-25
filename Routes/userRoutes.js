const express =require('express');
const api=express.Router();

api.get('/all/:page?', (req,res)=>{
    res.send('Funciona get all');
});

api.get('/view/:id', (req,res)=>{
    res.send('Funciona un usuario');
});

api.post('/register', (req,res)=>{
    res.send('Funciona el post');
});

api.put('/update/:id', (req,res)=>{
    res.send('Funciona el update');
});

api.delete('/delete/:id', (req,res)=>{
    res.send('Funciona el delete');
});

module.exports=api;