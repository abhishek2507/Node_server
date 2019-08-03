var http = require('http');
var url = "https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=495cf809c674e00a8d8affcf27011a60";

var server = http.createServer(function(request,response){
    //All logic goes here.
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<h2>" + 'Temperature - : '+ data.main['temp'] + '<br>' + "</h2>");
           /* response.write("<html><body><div id ='container'>");
            response.write("<h1>" + 'City Name - :' + data['name'] + '<br>' + "</h1>");
            response.write("<h2>" + 'Temperature - : '+ data.main['temp'] + '<br>' + "</h2>");
            response.write("<h2>" + 'SunSet Time - : '+ new Date(data.sys['sunset']*1000)+"</h2>");
            response.write("</div></body></html>"); */
    console.log(body);
   
    response.end();    
    });
    

}).listen(8081);