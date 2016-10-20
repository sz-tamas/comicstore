var express = require("express"),
    app = express(),
    path = require("path"),
    helmet = require("helmet");

app.use(helmet());
app.disable('x-powered-by');

var dist = __dirname + '/dist';

app.use('/css', express.static(dist + '/css'));
app.use('/js', express.static(dist + '/js'));

app.get('/*',function(req,res){
    res.sendFile(path.join(dist + '/index.html'));
});

app.listen(3000);
console.log("Running at Port 3000");