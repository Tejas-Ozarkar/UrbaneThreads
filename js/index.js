$("#about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".about-us-wrap").offset().top
    }, 1000);
});
$("#organic").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".organic").offset().top
    }, 1000);
});
$("#fairtrade").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".fairtrade").offset().top
    }, 1000);
});
$("#lifecycle").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".cycle-wrap").offset().top
    }, 1000);
});
$("#contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("footer").offset().top
    }, 1000);
});
