$(document).ready(function(){
//(function(){

    $('button').on('click', function(){
        var link = $('link'),
            $this = $(this);
            stylesheet = $this.data('file');
        
        link.attr('href', stylesheet + '.css');
        
        $this.siblings('button')
             .removeAttr('disabled')
             .end()
             .attr('disabled','disabled');
    });
//})();
 
    $('dd').filter(':nth-child(n+4)').addClass('hide');
    $('dl').on('mouseenter','dt',function(){
        $(this).next()
                .slideDown(200)
                .siblings('dd')
                    .slideUp(200);
    });

});