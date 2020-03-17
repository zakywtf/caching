import express from 'express';
import bodyParser from "body-parser";
import {getData, postData} from './lib/cache';
import handleCtrl from './lib/ctrlHandler'

var app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req,res)=>{
    res.end('oke')
})

app.get('/cache/get', async (req, res) => {
    handleCtrl(req, res, async (body) => {
        return await getData()
    });
})

app.post('/cache/post', async (req, res) => {
    handleCtrl(req, res, async (body) => {
        return await postData(req.body)
    });
})

var server = app.listen(process.env.PORT || 9876, function () { 
    getData()
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})  