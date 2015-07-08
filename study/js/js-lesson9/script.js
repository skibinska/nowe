/**
 * Created by ewelina on 08/07/15.
 */

(function($){
    var sliderUl = $('div.slider').css('overflow','hidden').children('ul'),
        imgs = sliderUl.find('img'),
        imgWidth = imgs[0].width, // 600
        imgsLen = imgs.length, // 4
        current = 1,
        totalImgWidth = imgWidth * imgsLen; //2400
    
    $('#slider-nav').show().find('button').on('click', function(){
        var direction = $(this).data('dir'),
            loc = imgWidth;
        
    //    update current value
        (direction === 'next') ? ++current : --current;
        
        
    //    if first image
        if( current === 0){
            current = imgsLen;
            loc = totalImgWidth - imgWidth; // 2400 - 600 = 1800
            direction = 'next';
        }
        else if(current - 1 === imgsLen){
            current = 1;
            loc = 0;
        }

        transition(sliderUl, loc, direction);
    });
    
        function transition( container, loc, direction ){
            var unit;  // -= +=
            
            if(direction && loc !== 0){
             unit = (direction === 'next') ? '-=' : '+=';
                
            }
            
            container.animate({
                'margin-left': unit ? (unit + loc) : loc
            });
    }
    
})(jQuery);