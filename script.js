/*Elements===============================================================================*/
var output = document.getElementById("output_text");

var send_field = document.getElementById("input_1");
var receive_field = document.getElementById("output_1")

/*Animations=============================================================================*/
var animation_elements = [];

function apply_animation(animation, duration, element){
    var animation_element = document.getElementById(element);

    animation_element.addEventListener("click", function(){
        animation_element.style.animation = "none";
        animation_element.style.removeProperty("transform");

        animation_element.offsetHeight;

        animation_element.style.animationName = animation;
        animation_element.style.animationDuration = duration;
    });
    animation_elements.push(animation_element);
}

apply_animation("spin", "2s", "receive_button");

/*Buttons================================================================================*/
function get_button(button_id, action) {
    var button = document.getElementById(button_id);

    button.addEventListener("click", action);
}

    //Send_button
function pub_message(){
    var input = document.getElementById("input_1");
    var message = input.value;

    client.publish('latest_message', message, {qos: 2, retain: true});
}

get_button("send_button", pub_message);

/*MQTT===================================================================================*/

client.on('message', function(topic, message){
    var text = message.toString();
    if(topic === 'latest_message'){
        output.innerHTML = text;
    }
})
