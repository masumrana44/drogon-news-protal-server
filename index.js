const express=require('express')
const app =express();
const port=process.env.PORT || 5000;
const cors=require('cors');


// data 
const categories=require('./data/categories.json');
const news=require('./data/news.json');

app.use(cors())
app.get('/',(req,res)=>{
    res.send('News API Running');

});

app.get('/news-categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log('News-Protal-Server is Running on port',port)
})