var broker = 'wss://d34704fe8f874a3aa342016af4877888.s1.eu.hivemq.cloud:8884/mqtt';

var options = {
    username : 'Mirko Kontroller',
    password : '#Inft_H_lb/MQTT1#',
    clientId : 'Website',
    clean : true
};

var client = mqtt.connect(broker, options);

client.on('connect', function(){
    alert("VERBUNDEN");
});

client.on('error', function(){
    alert("SCHEISSE");
});

client.subscribe('latest_message', {qos: 2});
