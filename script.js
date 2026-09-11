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

/*MQTT===================================================================================*/
