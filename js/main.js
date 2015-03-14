function toPage(page, speed){
    if(page == "#Mission"){ $(".parallax").animate({scrollTop:"513px"},speed);lightOn($('#mm'))}
    else if(page == "#Products") {$(".parallax").animate({scrollTop:"1607px"},speed);lightOn($('#mp'))}
    else if(page == "#Testimonials") {$(".parallax").animate({scrollTop:"2573px"},speed);lightOn($('#mt'))}
    else if(page == "#Team") { $(".parallax").animate({scrollTop:"4136px"},speed);lightOn($('#ma'))}
    else if(page == "#Press") { $(".parallax").animate({scrollTop:"4659px"},speed); lightOn($('#mr'))}
}
function lightOn(elem){
    $(elem).parent().parent().find('a').css("opacity","1");
    $(elem).css("opacity","0.6");
    if(elem == false) $(".nav li a").css("opacity","1");
}
$(document).ready(function(){
    var page = document.location.hash;
    toPage(page,0)
    $("#group2").on({
        mouseenter: function () {
            lightOn($('#mm'))
        },
        mouseleave: function(){
            lightOn(false)
        }
    });
    $("#group3").on({
        mouseenter: function () {
            lightOn($('#mp'))
        },
        mouseleave: function(){
            lightOn(false)
        }
    });
    $("#group5").on({
        mouseenter: function () {
            lightOn($('#mt'))
        },
        mouseleave: function(){
            lightOn(false)
        }
    });
    $("#TeamP").on({
        mouseenter: function () {
            lightOn($('#ma'))
        },
        mouseleave: function(){
            lightOn(false)
        }
    });
    $(".press").on({
        mouseenter: function () {
            lightOn($('#mr'))
        },
        mouseleave: function(){
            lightOn(false)
        }
    });

    var videos = document.getElementsByTagName("video")
    $("#video").on({
        mouseenter: function () {
            videos[0].play();
        },
        mouseleave: function () {
            videos[0].pause();
        }
    });
    $(".expand").on("click",function(e){
        e.preventDefault();
        $(this).fadeOut("fast");
        var par = $(this).parent().next();
        par.fadeToggle("slow");
    })
    $(".nav li a").on("click",function(e){
        console.log($(".parallax").scrollTop())
        var page = $(this).attr("href");
        toPage(page,1000);
    })
});
