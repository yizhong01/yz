$(document).ready(function(){
$('.slider_area').each(function(){
    var $target = $('.slider_area li'); 
    var $imglength =  $target.length;
    var count = 0;
    function imgNum(){
     
        imgFade();
        count++;
        if(count>=$imglength){
            count = 0;
        }
        setTimeout(imgNum,3000);
    }
    function imgFade(){
        $target.fadeOut();
        $target.eq(count).fadeIn(2000);
    }
    imgNum();
});
});