var expres= require('express');
var path= require('path');
var bodyparse=require('body-parser');
var app =expres();
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true}));
app.use(expres.static(path.join(__dirname,'Files')));
var http=require('http').Server(app);
const https = require('https');

var server =http.listen(3001,()=>
{
    console.log('Port Listen at',server.address().port);
});

app.get("/messages",(req,res)=>
{
    try{
console.log("Start");
const url = encodeURIComponent('https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics');
const options = {
  hostname: 'api.proxycrawl.com',
  path: '/scraper?token=LiiJObY14g1B-Ene8K8p-Q&url=' + url
};
https.request(options, (response) => {
  let body = '';
  response.on('data', chunk => body += chunk).
  on('end', 
  () => res.send(body));
}).end();
    }
    catch(ex)
    {
        res.send(null);
    }

});
