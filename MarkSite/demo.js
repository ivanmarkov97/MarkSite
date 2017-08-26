var counter = 0;
var span_like_container = document.getElementsByClassName("like_counter");

function add_like(){
	counter++;
	if(counter >= 0){
		span_like_container[0].style.color = "#00FF00";
	}
	span_like_container[0].innerHTML = counter;
}

function del_like(){
	counter--;
	if(counter < 0){
		span_like_container[0].style.color = "#FF0000";
	}
	span_like_container[0].innerHTML = counter;
}
