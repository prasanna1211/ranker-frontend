var express = require('express');
var app = express();
var fs = require('fs');
console.log('listening 4000');
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 4000);
console.log('listening 4000');
module.exports = {app}
