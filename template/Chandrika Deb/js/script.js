$(document).ready(function(){
  $('.fa-chevron-up').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// inspired by 
// https://dribbble.com/shots/920939-Portfolio-Redesign-2013-early-stage?list=searches&tag=portfolio&offset=22