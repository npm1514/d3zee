var express = require('express');
var cors = require('cors');

var app = express();
app.use(express.static(__dirname));
app.use(cors())

app.listen(process.env.PORT || 3000, function(){
  console.log("listening to 80 or 3000");
});
