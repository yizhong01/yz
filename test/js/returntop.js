$(document).ready(function () {
    function returntop(windowW, scrollTop) {
        $(window).on('scroll resize', function () {
            var $windowW = $(window).width();
            var $scrollTop = $(window).scrollTop();
            var target = $('.returntop_area');
            if ($windowW > windowW) {
                if ($scrollTop > scrollTop) {
                    target.fadeIn(200);
                    target.on('click', function () {
                        $('html , body').stop().animate({
                            scrollTop: '0'
                        }, 500)
                    });
                }else{
                    target.fadeOut(200);
                }
            }
        });
    }
    returntop(980, 20);
});