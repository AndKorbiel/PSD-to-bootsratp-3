$(document).ready(function() {

  // toggle with second parameter to target only this 
  $('.main').hover(function() {
    $('#sub-nav', this).slideToggle('slow');
  });
  
    // show 2nd level elements with other animation
    $('.sub').hover(function() {
    $('#sub-nav-2', this).show().animate({
    'width': '120px'
    }, 400);
  }, function () { // 'calback' animation
        $(this).find('ul').animate({
            'width': '0'
        },175).hide();
  }
  );

});