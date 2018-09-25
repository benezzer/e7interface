// JavaScript Document

$(document).ready(function(){

$(".my_item").click(function(){
	
	if($(this).hasClass("my_clicked")){
		$(this).removeClass("my_clicked");
	}else{
	$(".my_item").removeClass("my_clicked");
	$(this).addClass("my_clicked");
	
	}
	
});


});///end document ready