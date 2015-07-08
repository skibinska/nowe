/**
 * Created by ewelina on 07/07/15.
 */
$(document).ready(function() {
    
    // the way I did
    //$('button').on('click', function fadeSlideToggle(){
    //    var box = $('div#box');
    //    box.animate({
    //        'height': 'toggle',
    //        'opacity': 'toggle'
    //    }, 3000, 'swing')
    //});
    
//    the way the tutor did
    (function(){
        var box = $('div#box');
        
    $.fn.fadeSlideToggle = function(speed, fn){
        return $(this).animate({
            'height': 'toggle',
            'opacity': 'toggle'
        }, speed || 400, 
            $.isFunction() && fn.call(this))
    };
        
    $('button').on('click', function(){
        box.fadeSlideToggle();
        
    })
    })();   
});


//Homework
//Tonight, I want you to create your own fadeSlideToggle() method that will combine the functionality of slideToggle and fadeToggle.
//You may not reference either of these methods directly; instead, you'll use animate(). Hint: jQuery allows you to pass the string, "toggle," as a value for height and opacity.
//When finished, the method should be called, like so: $('#box').fadeSlideToggle();. We'll write a solution together in the next lesson, but try to do it by yourself this evening.
