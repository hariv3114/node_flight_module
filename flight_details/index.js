var Flight_details = function(){
    
    // Initialize values
    this.values = {
        fl_number : null,
        origin : null,
        destination : null
    };
    
    // Filling function
    this.fill = function(flight_info){
     for(var vals in this.values){
        if(this.values[vals] != 'undefined'){
            this.values[vals] = flight_info[vals];
        }
      }
    }
    
    
    // Setters and getters
    this.getFlNumber = function(){
            return this.values.fl_number;
        },
    this.getOrigin = function(){
          return this.values.origin;  
        },
    this.getDest = function(){
            return this.values.destination;
        },
    this.getInfo =  function(){
            return 'FLight '+this.values.fl_number+' from '+this.values.origin+' travelling to '+ this.values.destination;
        }
    
}

// Factory for Flight_Details module
module.exports = function (flight_info){
    var instance = new Flight_details();
    instance.fill(flight_info);
    return instance;
}

var http = require('http');

var  express = require('express');
var app = express();
app.get('/',function(req, res){
    res.end('Flight details');
})

http.createServer(app).listen(3000);