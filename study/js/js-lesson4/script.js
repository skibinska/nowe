$(document).ready(function(){
    
    (function(){
        var co = $('article').find('span.co').each(function(){
            var $this = $(this);
            $('<blockquote></blockquote>',{
                class: 'co',
                text: $this.text()
            }).prependTo( $this.closest('p') );
            
        });

  $('<h3></h3>',{
      text:'Hi from the JavaScript',
      class: 'myClass'
  }).insertAfter('h1');

        $('p').eq(0).after(function(){
            return $(this).prev();
        });

    })();
    
});