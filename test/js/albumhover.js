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
    });
}
$('.hoveralbum_area').each(function(){
    albumeach();
});

});