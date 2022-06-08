// For use within normal web clients
	var isiPad = (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) ) != null;

$(document).ready(function(){

    $("#content ul li" ).click( function()  {
        //Cache the jQuery wrapped this to be used through function & callbacks
        var that = $( this );
		var current = $("#content").data("active") || "";
		var index = "" + $('#content ul li').index(that); //make sure it's a string

		if (current !== index) { //if not the same item clicked

			//Put fadeIn here if you want to show during animate
			if (isiPad) {
				 that.addClass("active");
				 $("#portfolio #content").data("active", index);

			} else {
				that.find( "p" ).fadeIn().end().animate({
						width: "+=298",
						height: "+=104"
					}, 500, function() {
						//Put fadeIn here if you only want to show after animate
						//paragraph.fadeIn();
						$("#content").data("active", index);
					});
			}
		}

		if ( current != "") {		//collapse open item
			var currentObj = $("#content ul li:eq(" + current + ")");
			if (!isiPad) {
				currentObj.find("p").fadeOut().end().animate({width:'125px', height:'80px'}, 300);
			}else{
				currentObj.removeClass("active");
			}
		}

    });

	if (!isiPad) {
		$( "#content ul li" ).hover( function() {
			$(this).css( { "opacity": "1" } );
		}, function() {
			$(this).css( { "opacity": ".6" } );
		});
	} else { $("#content ul li:eq(0)" ).click(); }



});


