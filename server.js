const express=require('express');
const app=express();
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const mongodb=require('./config/connectdb');
const path =require('path');

dotenv.config({ path:'./config/config.env'});

app.use(express.json());

if(process.env.node_env==='development'){
    app.use(morgan('dev'));
}
mongodb();
const transaction=require('./routes/transaction');

app.use('/api/v1/transaction',transaction);
if(process.env.node_env ==='production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

const port=process.env.port || 4000;

app.listen(port);