# Google Transport API JSON Parser
Parsing JSON from Google Transport API

## To use it in another JS file for example to get general information about the journey
  * Usage
   ```javascript 
        var transport = require('./transport_json_parser.js')(src, dest, key);
        transport.getTransInfo(function(err, directionInfo) {
         //Your code goes here
      });
      ```

   * Example,
  
         ```javascript 
          var transport = require('./transport_json_parser.js')(src, dest, key);

          transport.getTransInfo(function(err, directionInfo) {
     
          //Example to use directionInfo to retrieve info
     
          console.log("\n\t<<<<<<<General Details from Test_Transport>>>>>>>" + 
    
          "\n\t Departure Time: " + directionInfo[0].departure_time +
      
          "\n\t Arrival Time: " + directionInfo[0].arrival_time +
      
          "\n\t Duration: " + directionInfo[0].duration +
      
          "\n\t Distance: " + directionInfo[0].distance);
      
  });
  ```

## TO get the directions of the journey

	* Usage
	```javascript 
	transport.direction(function(err, directionInfo){
		//your code goes here
		});
	```
	* Properties exposed:
	* `step`,//Number of the step
        * `travel_mode`,//Transit or walking
        * `instructions`,//Instructions
        * `start_location`,//lat and long in string format
        * `end_location`,//lat and long in string format
        * `distance`,//distance in KMs
        * `duration`,//duration in minutes
        * `num_stops`,//number of stops in case of transit
        * `line`,//name of the line in case of transit
        * `direction`//direction of the transit. ex. 'towards westbahnof' 
	
	* Example,
	```javascript
		var transport = require('./transport_json_parser.js')(src, dest, key);
		transport.direction(function(err, directionInfo){
		console.log("\n\t ##########Directions########## \n\t Total Number of Steps: "+directionInfo.length+
			"\n\t Step Number: "+directionInfo[0].step+
			"\n\t Travel Mode: "+ directionInfo[0].travel_mode);
			});
			```
			
## To print it in console

  - use `node test_transport.js [source] [destination]`. 
  - For example, `node test_transport.js wedding alexanderplatz`
  - Output in the form:

```console
Fetching the Directions....

***********Route from wedding to Leopoldplatz in the time zone Europe/Berlin************

       ` #####Your Journey Details#####
        Departure time from wedding: 2:57pm
        Arrival time at Leopoldplatz: 3:04pm
        Distance: 2.0 km
        duration: 8 mins

        ---->Directions<----

        Step1:
        Travel Mode: WALKING
        Instruction: Walk to U Rehberge (Berlin)
        Start Location: 52.5560845 13.3389476
        End Location: 52.556283 13.3416798
        Distance: 0.3 km
        duration: 4 mins
        Number of Stops: Not Applicable
        Line: Not Applicable
        Direction: Not Applicable

        Step2:
        Travel Mode: TRANSIT
        Instruction: Subway towards U Alt-Mariendorf (Berlin)
        Start Location: 52.556283 13.3416798
        End Location: 52.5461888 13.358831
        Distance: 1.6 km
        duration: 3 mins
        Number of Stops: 2
        Line: U6
        Direction: U Alt-Mariendorf (Berlin)

        Step3:
        Travel Mode: WALKING
        Instruction: Walk to Leopoldplatz, 13353 Berlin, Germany
        Start Location: 52.5461888 13.358831
        End Location: 52.5465753 13.3593339
        Distance: 48 m
        duration: 1 min
        Number of Stops: Not Applicable
        Line: Not Applicable
        Direction: Not Applicable
        
        <<<<<<<General Details from Test_Transport>>>>>>>
         Departure Time: 2:57pm
         Arrival Time: 3:04pm`
         Duration: 8 mins
         Distance: 2.0 km
         
   ```
