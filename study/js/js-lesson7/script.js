/**
 * Created by ewelina on 07/07/15.
 */
$(document).ready(function(){
    (function(){
        var content = $('div.content'),
            w = $(window).width()/2 - content.outerWidth()/ 2,
            h = $(window).height()/2 - content.outerHeight()/ 2;
        
      $('button').on('click', function(){
         content.animate({
             'left': w,
             'position': 'absolute'
         })
             .animate({
                 'top': h
             },{duration: 200, queue: false})
      });
    })();
});