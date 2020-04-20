// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/alanandhannah.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/alanandhannah.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/alanandhannah.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.get('/updateWeatherFeeds', function (req, res) {
    let locations = ['352605', '324166', '322954', '353370', '324249', '354677'];
    let apiKey = 'd5df697d-3ed8-4efd-94ed-c67283bb23ee';
   
    locations.forEach(location => {
        let url = `http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/${location}?res=3hourly&key=${apiKey}`;
        fetch(url)
        .then(res => res.json())
        .then(json => {
            let fn = path.join(__dirname, 'html') + '/json/' + location + '.json';
            let data = JSON.stringify(json)
            fs.writeFile(fn, data, function (err) {
            if (err) return console.log(err);
            console.log(`Written ${location}`);
            });
        });
    });
    res.send('done');
});


app.use(express.static(path.join(__dirname, 'html')))

//app.use((req, res) => {
//	res.send('Hello there !');
//});



// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});