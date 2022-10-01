$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $("#four-col-jq").on("click", function() {
        alert("click vào ra 4 cột");
        // $(".setion-listing").addClass( "four-listing" );
        $(".setion-listing").removeClass( "two-listing" );
    })

    $("#two-col-jq").on("click", function() {
        alert("click vào ra 2 cột");
        $(".setion-listing").removeClass( "four-listing" );
        $(".setion-listing").addClass("two-listing");
    })
  });