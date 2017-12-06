$(document).ready(function() {
	//define variables
	let content = document.getElementById('hiddencontext');
	let drop = document.getElementById('dropdown');
	let a = document.getElementById("countdown");
	let charge = document.getElementById("battery");
	let index = 0;
	let countdownindex = 0;
	let anotherindex = 0;
	drop.addEventListener("click", function() {
		//this conditional statement makes that so the 
		//countdown function will only run once
		if(countdownindex !== 1){
		countdown();
		battery();
		//this will rerun the battery function every 5 seconds
		setInterval(battery,5000);
		countdownindex +=1;
		}
		//this condition statement makes that when a user click
		//the button once, the popout menu will show up
		//if the user click it again, the menu will disappear.
		if(index === 0){
			console.log("h3i")
			content.classList.add("show");
			index +=1;}
		else{
			console.log("hi")
			content.classList.remove("show");
			index = 0 ;
		}

		//make a function called battery, it will run a serious of
		// font-awesome string for 4 seconds
		//And it will be repeated itself in the eventListener

		function battery(){
 	 	setTimeout(function(){
	     	charge.innerHTML = "&#xf244;";
   			 },0000);
		setTimeout(function(){
	      	charge.innerHTML = "&#xf243;";
   			 },1000);
 	 	setTimeout(function(){
	      	charge.innerHTML = "&#xf242;";
   			 },2000);
 	 	setTimeout(function(){
	      	charge.innerHTML = "&#xf241;";
   			 },3000);
 	 	setTimeout(function(){
	      	charge.innerHTML = "&#xf240;";
   			 },4000);
 	 	 }

 	 	//make a function called countdown that counts from
 	 	//999 to 1 
 	 	//the reason why I didn't make a conditional
 	 	//statement that makes the countdown to not reach negative
 	 	//is because it will automatically stops at 1

		function countdown(){
	 	 let num = 999;
	  	  for(let i = 0; i < num ; i++){
	  	  	setTimeout(function(){
	      	a.innerHTML = num - i;
   			 },i*1000);
	  	 
 	 	 }

 	 	}

	})
})
