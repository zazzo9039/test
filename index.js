var sensor = require('node-dht-sensor');
function time(){
sensor.read(11, 4, function(err, temperature, humidity) {
    if (!err) {
	
        console.log('temp: ' + temperature.toFixed(2) + '\u00B0C, ' +
            'humidity: ' + humidity.toFixed(2) + '%'
        );
	    console.log('test git revert commit ');
    }

});
}
setInterval(time,200);
