/**
 * Created by ewelina on 07/07/15.
 */
$(document).ready(function(){
    (function(){
        var content = $('div.content').hide();
        
        jQuery.fn.flash = function(speed, easing, callback){
            var $this = $(this);
            $this.slideDown(500, function(){
            $this.delay(2000).slideUp(500);
            });
        };
        
        $('h1').on('click', function(){
           content.flash();   //content instead of $(this).next('div.content')
        });
    })();
});