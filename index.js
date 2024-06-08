var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000, function(){
  console.log("listening to 80 or 3000");
});
