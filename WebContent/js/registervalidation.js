$(window).on('load',function() {
$(document).on('click','#send',function(){
	var userName=$('#UserName').val();
	if(userName==""){
         alert("pls enter username or email");
          return false;
       
}
$.cookie('userName',userName, {expires : 1 });
        var password=$('#password').val();


       if(userName==""){
         alert("pls enter username or email");
          return false;
       
}

//set the cookies
$.cookie('password', password, { expires: 1 });



     });
});