$(window).on('load',function() {
	
		$(document).on('click','#send',function(){
					

		// Getting input from TextBox (from the add product)
		var userName =$('#userName').val();
	   var password=$('#password').val();
		var fullName=$('#fullName').val();
		
		var url="/trello/register?operation=register&userName="+ userName +"&password="+ password +"&fullName="+ fullName ;
		//$("input[type=text],textarea").val("");
		$.ajax(url)
		.done(function(result) {  // result is the response from Server
			//console.log(result); 

			alert(result);
		})
		.fail(function(result) {  
		alert(result);
		});

	});
});
