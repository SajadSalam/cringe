function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}
var app = new Vue({
    el: '#app',
    data: {
      device: window.getMobileOperatingSystem()
    }
})
$(document).ready(function(){
    $('.logo').animate({
        opacity: 1
    }, 750,function(){
        $('.slideDown').slideDown(750,function(){
            $('.slideDown2').slideDown(750);    
        });
    });

});