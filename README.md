# Google Transport API JSON Parser
Parsing JSON from Google Transport API

* Now print the directions on console or use the same as a json object to use it in other JS file.

* use `node test_transport.js [source] [destination] [key]`. 
  - For example, `node test_transport.js wedding alexanderplatz XXXXXyBCroIiU9zWXaFXXXXXXXXXXXXXXXXXXXX`

* Output in the form:

`Fetching the Directions....`

`***********Route from wedding to Leopoldplatz in the time zone Europe/Berlin************`

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
