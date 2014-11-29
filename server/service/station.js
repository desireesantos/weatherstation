module.exports = function (sensors) {
var sensorvalues = new Array();

	sensorvalues = sensors.split("-");
	
    this.sensor0 = sensorvalues[0];
    this.sensor1 = sensorvalues[1];
    this.sensor2 = sensorvalues[2];
    this.sensor3 = sensorvalues[3];
    this.sensor4 = sensorvalues[4];
    this.sensor5 = sensorvalues[5];
    this.sensor6 = sensorvalues[6];
};
