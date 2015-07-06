/**
 * Created by ewelina on 04/07/15.
 */
$(document).ready(function(){

    (function(){
       $('html').addClass('js');
       
        var contactForm = {
            container: $('#contact'),
            config: {
                effect: 'slideToggle',
                speed: '300'
            },
            
            init: function(config){
                $.extend(this.config, config);
                $('<button></button>',{
                    text:'Contact Me'
                })
                    .insertAfter('article')
                    .on('click', this.show);
            },
            

            show:function(){
                var cf = contactForm,
                    container = cf.container,
                    config = cf.config;
                
                if( container.is(':hidden') ) {
                    cf.close.call(container);
                    container[config.effect](config.speed);
                }
        },
            close: function(){
                $this = $(this); // #contact
                
                if( $this.find('span.close').length ) return;
                
                $('<span class=close>X</span>')
                    .prependTo(this)
                    .on('click', function(){
                        $this[contactForm.config.effect](contactForm.config.speed)();
                        
                    });
                
            }
            
        };
        contactForm.init({
            effect: 'fadeToggle',
            speed: 2000
            
        });
    })();

});
