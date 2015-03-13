function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

$(document).ready(function(){
    $(".tagline").fadeIn("fast");
    $(".nav").fadeIn("fast");
    var videos = document.getElementsByTagName("video")
    $("#video").on({
        mouseenter: function () {
            console.log("in")
            videos[0].play();
        },
        mouseleave: function () {
            console.log("out")
            videos[0].pause();
        }
    });
    $(".expand").on("click",function(e){
        e.preventDefault();
        $(this).fadeOut("fast");
        var par = $(this).parent().next();
        par.fadeToggle("slow");
        location.hash="#story";
        scrollToElement('#story', 500);
    })
});
