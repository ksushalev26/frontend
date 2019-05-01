$(function() {

	
  $('.canvas').append('<div class="box green"></div>');
  var left = 0;
  var top = 0;
  var intervalId = 0;
  var canvas_width = $('.canvas').width();
  var box_width = $('.box').width();
  var borderX = canvas_width - box_width;
  var directionX = 'RIGTH';
  
  var canvas_height = $('.canvas').height();
  var box_height = $('.box').height();
  var borderY = canvas_height - box_height;
  var directionY = 'BOTTOM';
  
  
  $('button:first').click(function() {
  
  	intervalId = setInterval(function() {   	
      
      	var positionLeft = $('.box').position().left;        
        
        var positionTop = $('.box').position().top;        
        
        if (positionLeft == borderX) {
        	directionX = 'LEFT';
        } else if (positionLeft == 0) {
        	directionX = 'RIGHT';
        }
        
        if (positionTop == borderY) {
        	directionY = 'TOP';
        } else if (positionTop == 0) {
        	directionY = 'BOTTOM';
        }
        
        if (directionX === 'RIGHT') {
        	$('.box').css('left', left++ + 'px');          
        } else if (directionX === 'LEFT') {        
    			$('.box').css('left', left-- + 'px');          
      	}
        
        if (directionY === 'BOTTOM') {
        	$('.box').css('top', top++ + 'px');          
        } else if (directionY === 'TOP') {        
    			$('.box').css('top', top-- + 'px');          
      	}   
    }, 4);  	
  });
	 $('button:eq(1)').click(function() {
  		clearInterval(intervalId);
  	});    
});
