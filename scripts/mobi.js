
$(document).ready(function(){

      
    $( "#portfolio #content ul li" ).click( function()  {
    	
    	
        //Cache the jQuery wrapped this to be used through function & callbacks
        var that = $( this ),
            paragraph = that.find( "p" ),
            width = that.css( "width" );
            height = that.css( "height" );
         
		var current = $("#portfolio #content").data("active") || "";   
		var index = "" + $('#content ul li').index(that); //make sure it's a string
	
		if (current !== index) { //if not the same item clicked
			
			if ( current != "") {		//collapse open item	
				var currentObj = $("#content ul li:eq(" + current + ")"); 					
				currentObj.find("p").fadeOut().end().animate({width:'125px', height:'80px'}, 300);				
			}  
		
			if ( width === "125px" ) {
				//Put fadeIn here if you want to show during animate
// 				paragraph.fadeIn();    
// 				
//  				that.animate({
//  					width: "+=298",
//  					height: "+=104"
//  				}, 5, function() {
//  					//Put fadeIn here if you only want to show after animate
//  					//paragraph.fadeIn();        
//  					$("#portfolio #content").data("active", index);   
// 				
				width = 423;
				height = 194;
				
				});
			} else if ( width === "423px" ) {  
				//Put fadeOut here if you want to hide during animate      
				paragraph.fadeOut();
				
				that.animate({
					width: "-=298px",
					height: "-=104px"
				}, 5, function() {
					$("#portfolio #content").data("active", index);
					//Put fadeOut here if you only want to hide after animate
					//paragraph.fadeOut();
				});
			}
		}

    });
});


