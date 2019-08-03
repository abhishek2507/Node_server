var http = require('http');
var url = "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=495cf809c674e00a8d8affcf27011a60";

var server = http.createServer(function(request,response){

    //All logic goes here.
}).listen(8081);