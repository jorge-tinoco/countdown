$(document).ready(function() {
    var deadline = new Date("Mar 27, 2019 20:01:25").getTime(); 
    var running = setInterval(timer, 1000); 


    /*
    * Calculate remaining time and update the DOM.
    */
	function timer() {
		var now = new Date().getTime(); 
		var t = deadline - now; 
		var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
		var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
		var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
		var seconds = Math.floor((t % (1000 * 60)) / 1000); 
		if (t < 0) { 
	        clearInterval(running); 
	    }else
	    {
	    	// Update DOM
			$("#day").text(days);
			$("#hour").text(hours);
			$("#minute").text(minutes);
			$("#second").text(seconds);
	    } 
    }

});