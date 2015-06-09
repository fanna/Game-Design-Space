// JavaScript Document
$(document).ready(function(e) {
    
	$("#searchBox").keypress(function(e) {
        
		var value = $(this).val();
		
		$(".friendName").each(function(index, element) {
            
			if($(this).html().toLowerCase().contains(value.toLowerCase())) {
				$(this).parent().show();
			}else {
				$(this).parent().hide();	
			}
			
        });
    });
	
});