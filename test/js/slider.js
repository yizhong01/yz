$(document).ready(function () {
    $('.slider_area').wrapAll('<div class="slider_wrapper"></div>');
    $('.slider_wrapper').css({
        'width': '100%',
        'max-width': '1120px',
        'margin': 'auto',
        'overflow': 'hidden'
    });
    var $imglength = $('.slider_area li').length;
    console.log($imglength);
    $('.slider_wrapper').after('<div class="btn_list_area"><ol class="btn_list"></ol></div>');
    console.log("1");
    for (i = 0; i < $imglength; i++) {
        console.log("1");
        $('.btn_list').prepend('<li></li>');
    }
    $('.slider_wrapper').append('<button class="next_btn slider_btn"></button>').prepend('<button class="before_btn slider_btn"></button>')
    $('.slider_btn').on('click', function () {
        $('.slider_btn').addClass('is-active');
    });

function isfunction(){
    var count = -1;
    function countNum() {
        $('.next_btn').on('click', function () {
            count++;
            console.log(count);
            if (count >= $imglength) {
                count = 0;
            }
            imgSlider();
        });
        $('.before_btn').on('click', function () {
            count--;
            console.log(count);
            if (count < 0) {
                count = $imglength - 1;
            }
            imgSlider();
        });
 
    }
    countNum();
    function loopimg(){
        count++;
        console.log(count);
        if (count >= $imglength) {
            count = 0;
        }
        if (count < 0) {
            count = $imglength - 1;
        }
        imgSlider();
        setTimeout(loopimg,4000);
    }
    loopimg();
    function imgSlider() {
        var sliderW = $('.slider_area li').width();
        var trans_num = sliderW * count;
        $('.slider_area').css({
            'transform': 'translateX(' + '-' + trans_num + 'px)',
        });
        $('.btn_list li').removeClass('is-btn');
        $('.btn_list li').eq(count).addClass('is-btn');
    };

}
isfunction();
});