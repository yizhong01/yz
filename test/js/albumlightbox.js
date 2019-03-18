$(document).ready(function () {
    function albumeach(){
    $('.album_list li').each(function () {
        $(this).find('img').on('mouseover', function () {
            var imgSrc = $(this).attr('src');
            var imgAlt = $(this).attr('alt');
            var $target = $(this).parents('.hoveralbum_area').find('.mainalbum_area img');
            $target.attr('src', imgSrc);
            $target.attr('alt', imgAlt);
        });
        $('.ablum_mask').hide();
        $(this).find('img').on('click',function(){
            var imgSrc = $(this).attr('src');
            var imgAlt = $(this).attr('alt');
            $('.ablum_lightbox img').attr('src',imgSrc);
            $('.ablum_lightbox img').attr('alt',imgAlt);
            $('.ablum_mask').fadeIn();
            $('.ablum_mask').on('click',function(){
                $(this).fadeOut();
            });
        });
    });
}
$('.hoveralbum_area').each(function(){
    albumeach();
});
});