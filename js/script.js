const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

arrow.addEventListener("click", function(){
    arrow.classList.toggle("on");
    nav.classList.toggle("on");
})


// ANIMACJA PLAY/PAUSE - w przyszłości skrócić kod

$("a.p1").on("click", function(){
    $(".p1 i:nth-child(1)").toggleClass("go");
    $(".p1 i:nth-child(2)").toggleClass("go");
})
$("a.p2").on("click", function(){
    $(".p2 i:nth-child(1)").toggleClass("go");
    $(".p2 i:nth-child(2)").toggleClass("go");
})
$("a.p3").on("click", function(){
    $(".p3 i:nth-child(1)").toggleClass("go");
    $(".p3 i:nth-child(2)").toggleClass("go");
})
$("a.p4").on("click", function(){
    $(".p4 i:nth-child(1)").toggleClass("go");
    $(".p4 i:nth-child(2)").toggleClass("go");
})
$("a.p5").on("click", function(){
    $(".p5 i:nth-child(1)").toggleClass("go");
    $(".p5 i:nth-child(2)").toggleClass("go");
})
$("a.p6").on("click", function(){
    $(".p6 i:nth-child(1)").toggleClass("go");
    $(".p6 i:nth-child(2)").toggleClass("go");
})
$("a.p7").on("click", function(){
    $(".p7 i:nth-child(1)").toggleClass("go");
    $(".p7 i:nth-child(2)").toggleClass("go");
})
$("a.p8").on("click", function(){
    $(".p8 i:nth-child(1)").toggleClass("go");
    $(".p8 i:nth-child(2)").toggleClass("go");
})
$("a.p9").on("click", function(){
    $(".p9 i:nth-child(1)").toggleClass("go");
    $(".p9 i:nth-child(2)").toggleClass("go");
})
$("a.p10").on("click", function(){
    $(".p10 i:nth-child(1)").toggleClass("go");
    $(".p10 i:nth-child(2)").toggleClass("go");
})
$("a.p11").on("click", function(){
    $(".p11 i:nth-child(1)").toggleClass("go");
    $(".p11 i:nth-child(2)").toggleClass("go");
})
$("a.p12").on("click", function(){
    $(".p12 i:nth-child(1)").toggleClass("go");
    $(".p12 i:nth-child(2)").toggleClass("go");
})




// SCROLL DO ODPOWIEDNIEJ SEKCJI PO KLIKNIĘCIU

$('.download').on('click', function(){
    $('body, html').animate({
        scrollTop:
        $('.s1').offset().top
    }, 500)
})

$('.songs').on('click', function(){
    $('body, html').animate({
        scrollTop:
        $('.s2').offset().top
    }, 500)
})

$('.start').on('click', function(){
    $('body, html').animate({
        scrollTop:
        $('header').offset().top
    }, 500)
})

$('.contact, .about').on('click', function(){
    $('body, html').animate({
        scrollTop:
        $('footer').offset().top
    }, 500)
})



