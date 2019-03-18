$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var speed = 600,
            href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
            position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
  
  //  link_
$(window).on('load', function () {
    var url = $(location).attr('href');
    if (url.indexOf("#") != -1) {
        var hl = url.split("#");
        var target = $('#' + hl[hl.length - 1]);
        if (target.length) {
			var $headerH = $('#header_area').outerHeight();
			console.log($headerH);
			var position = Math.floor(target.offset().top) - $headerH;
			console.log(position);
            $("html, body").animate({
                scrollTop: position
            }, 500);
        }
    }
});
     

});