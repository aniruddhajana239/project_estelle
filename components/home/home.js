// function to perform  animated logo and right portion animation starts
$(document).ready(function () {

    showSlides();// function call for slide show

    setTimeout(function () {
        $('.animated-logo-gif').fadeOut(2000);
    }, 1000);

    $(".right-portion-transition").delay(1500).ready(function () {
        $(".right-portion-transition").animate({
            width: "54%",
        }, 1400);
    });
    // function to perform  animated logo and right portion animation starts

    // this function to perform the box fading functionality and triger mousehover automaticly and start the function after load of window

    var executeBorder = function () {
        console.log("Define");
        $(".a svg rect").hover(function () {
            $(this).css("stroke-dashoffset", 0);
        });
        $(".a svg rect").trigger('mouseover');
    }
    setTimeout(function(){ 
         executeBorder();
     }, 2900);
    

    // $(".a svg rect").hide();
    // $(".a svg rect").delay(3300).show();
    // box component and nav bar fading with time starts from

    $(".wealth-management-text").hide();
    $(".wealth-management-text").delay(3000).fadeIn(500);

    $(".informed-decisions-text").hide();
    $(".informed-decisions-text").delay(3000).fadeIn(500);

    $(".information-content").hide();
    $(".information-content").delay(3100).fadeIn(500);

    $(".future-wealth-management-text").hide();
    $(".future-wealth-management-text").delay(3100).fadeIn(500);

    $(".future-wealth-management-preview-text").hide();
    $(".future-wealth-management-preview-text").delay(3100).fadeIn(500);

    $(".email-address-text").hide();
    $(".email-address-text").delay(3200).fadeIn(500);

    $(".estelle-navbar").hide();
    $(".estelle-navbar").delay(3200).fadeIn(500);

    $(".copyright").hide();
    $(".copyright").delay(3200).fadeIn(500);

    $(".doated-pattern-img-portion").hide();
    $(".doated-pattern-img-portion").delay(3000).fadeIn(2000);

    $(".social-icon").hide();
    $(".social-icon").delay(3000).fadeIn(2000);

    $(".email-wealth-management-fading-effect").delay(3000).ready(function () {
        $(".email-wealth-management-fading-effect").animate({
            width: "0%",
        }, 800);
    });

});

// box component and nav bar fading with time starts from

    var slideIndex = 0;
    
    
    var showSlides= function (){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var slide = document.getElementsByClassName("sliade-data");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < slide.length; i++) {
            slide[i].className = slide[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        slide[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }