$(window).load(function(){

$(document).ready(function(){


    $( "#portfolio #content ul li" ).hover( function() {
        $(this).css( { "opacity": "1" } );
    }, function() {
        $(this).css( { "opacity": ".6" } );
    });
    

      
    $( "#portfolio #content ul li" ).click( function()  {
    	
    	
        //Cache the jQuery wrapped this to be used through function & callbacks
        var that = $( this ),
            paragraph = that.find( "p" ),
            width = that.css( "width" );
         
		var current = $("#portfolio #content").data("active") || "";   
		
		if (current != that.attr("class")) { //if not same item clicked
			
			if ( current != "") {		//collapse open item	 					
				$("." + current).find("p").fadeOut().end().animate({width:'125px', height:'80px'}, 300);				
			}  
		
			if ( width === "125px" ) {
				//Put fadeIn here if you want to show during animate
				paragraph.fadeIn();    
				
				that.animate({
					width: "+=298",
					height: "+=104"
				}, 500, function() {
					//Put fadeIn here if you only want to show after animate
					//paragraph.fadeIn();        
					$("#portfolio #content").data("active", that.attr("class"));        
				});
			} else if ( width === "423px" ) {  
				//Put fadeOut here if you want to hide during animate      
				paragraph.fadeOut();
				
				that.animate({
					width: "-=298px",
					height: "-=104px"
				}, 500, function() {
					$("#portfolio #content").data("active", that.attr("class"));
					//Put fadeOut here if you only want to hide after animate
					//paragraph.fadeOut();
				});
			}
		}

    });
})

});
