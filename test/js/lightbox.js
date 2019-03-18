$(document).ready(function () {
    $('.lightbox_area').each(function () {
        $(this).append('<div class="lightboxmask"><div class="lightboximg"></div></div>');
       var $defultSrc = $(this).find('.lightbox_list li').eq(0).find('img').attr('src');
       var $defultAlt = $(this).find('.lightbox_list li').eq(0).find('img').attr('alt');
       $(this).find('.lightboximg').append('<img src="' + $defultSrc +'"' + 'alt="' + $defultAlt + '">');
    $('.lightboxmask').hide();
    });
  
    $('.lightbox_list li').each(function () {
        $(this).on('click', function () {
            var $imgSrc = $(this).find('img').attr('src');
            var $imgAlt = $(this).find('img').attr('alt');
            $(this).parents('.lightbox_area').find('.lightboximg img').attr('src',$imgSrc);   
            $(this).parents('.lightbox_area').find('.lightboximg img').attr('alt',$imgAlt); 
            $(this).parents('.lightbox_area').find('.lightboxmask').fadeIn(1000);
            $(this).parents('.lightbox_area').find('.lightboxmask').on('click',function(){
                $(this).fadeOut(1000);
            });
        });
    });
});