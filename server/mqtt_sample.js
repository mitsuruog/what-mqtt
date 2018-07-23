var mqtt = require('mqtt');
var client = mqtt.connect('broker.hivemq.com');

client.subscribe('mitsuruog');
client.publish('mitsuruog', 'Hello mitsuruog mqtt :)');

client.on('message', function (topic, message) {
  console.log(topic);
  console.log(message.toString());
});

// Close client connection 
client.end();