$(document).ready(function() {
        $(window).bind("unload", function() {});
        $("body").css("display", "none");
        $("body").fadeIn(250);   
        $("a.transition").click(function(event){
        	event.preventDefault();
        	linkLocation = this.href;
      	    $("body").fadeOut(250, redirectPage);      
});
     
	function redirectPage() {
	   window.location = linkLocation;
	}
});
