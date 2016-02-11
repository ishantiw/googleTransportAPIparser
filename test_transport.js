//Source from cmd
var src = process.argv[2];
//Destination from cmd
var dest = process.argv[3];
//google api key
var key = process.argv[4];


if (src === null || dest === null) {
  console.log("Please give command line argument for example 'node test.js alexanderplatz wedding' ");
} else {
  console.log("^^^^^^Inside Test source^^^^^^^^^ ")
  //How to get general travel journey info "arrival_time", "departure_time", "distance", "duration" by the example shown in console.log statement
  var transport = require('./transport_json_parser.js')(src, dest, key);
  callGen(function(err, res) {
    console.log("\n\t<<<<<<<General Details from Test_Transport>>>>>>>" +
      "\n\t Departure Time: " + res[0].departure_time +
      "\n\t Arrival Time: " + res[0].arrival_time +
      "\n\t Duration: " + res[0].duration +
      "\n\t Distance: " + res[0].distance);
  });

  //Displaying on Console
  //transport.test();
}
function callGen(cb) {
  transport.getTransInfo(cb);
}
