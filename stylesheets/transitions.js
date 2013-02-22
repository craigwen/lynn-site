$(document).ready(function() {
        $(window).bind("unload", function() {});
        $("body").css("display", "none");
        $("body").fadeIn(100);
        $("a.transition").click(function(event){
        	event.preventDefault();
        	linkLocation = this.href;
        $("body").fadeOut(100, redirectPage);      
});
     
	function redirectPage() {
	   window.location = linkLocation;
	}
});
