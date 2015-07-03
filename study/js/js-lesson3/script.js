/* Exercise 1: Wish list */

$(document).ready(function(){

        var $button = $('#add-to-list'),
            $ol = $('ol#items'),  
            $input = $('#item');
        
        $button.on('click',function(e){
            $ol.append("<li>"+ $input.val() +"</li>");
            $input.val('').focus();
            $('li').append("<span class=\"label pending\">Pending</span>");
        });
    
         $('.label').on('click',function(e){
            var parent_node = $(this).parent();
             parent_node.addClass("completed").append("<span class='label success'>Done!</span>");

    });



});
