const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
let settings = { method: "Get" };
let YoutubeAPIKey = process.env.YoutubeAPIKey;

var express = require('express');
var app = module.exports = express();

app.get('/video', (req,res)=>{

    var VideoID = req.query.id;
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${VideoID}&key=${YoutubeAPIKey}`
    let list
    fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      list = json;
      res.json(list);
    });

})
