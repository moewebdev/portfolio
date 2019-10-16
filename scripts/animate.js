//animate sandwhich menu 
$('#menu-icon').click(function(){  
    this.classList.toggle('change');    
    $('#slide-out-nav').toggle(1000);
});
  
$(window).resize(function(){
    //hide slide out nav if user doesn't close before resizing the browser greater than 960px
    if($(window).width() > 900){
      $('#slide-out-nav').css('display','none'); 
      $('#menu-icon').removeClass('change'); 
    }
});
  

  
  