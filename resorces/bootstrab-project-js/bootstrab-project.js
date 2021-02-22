$(document).ready(function() {
    'use strict';

    //$('.slider').height(windowHeight-upperHeight)

    // Show Color Option Div when Click On the Gear

    $(".gear-check").click(function() {
        $('.color-option').fadeToggle()
    })


    //Change Theme Color On Click
    var colorLi = $('.color-option ul li');

    colorLi.eq(0).css("backgroundColor", "rgb(64 255 2)").end()
    colorLi.eq(1).css("backgroundColor", "rgb(255 177 0)").end()
    colorLi.eq(2).css("backgroundColor", "rgb(47 222 222)").end()
    colorLi.eq(3).css("backgroundColor", "rgb(196, 248, 8)");


    colorLi.click(function() {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    })


    //Change fontFamily On Click

    /*    var fontFamily = $("body").css("fontFamily");
       console.log(fontFamily) */

    var fontSelect = $(".option-box .font-option .font-form")
    console.log(fontSelect.val())

    fontSelect.change(function(e) {
        e.preventDefault();

        console.log($(this).find("option:selected").val())

        $("body").css({
            fontFamily: $(this).find("option:selected").val()
        })

    });





    // Featured Work Shuffle 

    $('.featured-work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col img').css('opacity', 1)
        } else {
            $('.shuffle-imgs .col img').css('opacity', '.08')
            $($(this).data('class')).css('opacity', 1)
        }
    })



    // Check Testimonials 

    /*     var LeftArrow = $('.testimonials .fa-chevron-circle-left'),
            rightArrow = $('.testimonials .fa-chevron-circle-right')


        function checkClaients() {

            $('.client:first').hasClass('active') ? LeftArrow.fadeOut() : LeftArrow.fadeIn()

            $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn()
        }
        checkClaients();




        function changeClient() {

            $('.testimonials i').click(function() {
                if ($(this).hasClass('fa-chevron-circle-right')) {

                    $('.testimonials .active').fadeOut(100, function() {

                        $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                        checkClaients();
                    })

                } else {
                    $('.testimonials .active').fadeOut(100, function() {

                        $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                        checkClaients();
                    })
                }
            })
        }
        changeClient(); */


    // $(window).load

    // Adjust Slider Height
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight() + 1,
        navheight = $('.nav-cont').innerHeight(),
        navtotal = upperHeight + navheight;
    console.log(upperHeight);
    console.log(navheight);
    console.log(navtotal);

    //  [1] Smothly Scroll To Element 
    $('.nav-cont li .nav-link').click(function(e) {

        e.preventDefault();

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - upperHeight
        }, 1000);

    });




    /**** Start Scrolling Event  ****/

    $(window).scroll(function() {

        // [2] Make Sync action between sections and it's links in navbar

        $('.block').each(function() {

            if ($(window).scrollTop() >= $(this).offset().top - (upperHeight)) {

                var blockID = $(this).attr('id');

                $('.nav-cont .nav-link').removeClass('active');

                $('.nav-cont .nav-link[data-scroll="' + blockID + '"]').addClass('active');

            }
        });




        // [3] make navbar top after scroll

        //console.log("window scroll top is" + $(window).scrollTop())
        //console.log("navbar offset top" + $('.nav-cont').offset().top)
        //console.log("upper-bar offset top" + $('.upper-bar').offset().top)
        var navLink = $(".navbar-light .navbar-nav .nav-link")

        /*         $('.nav-cont').css({
                    top: upperHeight
                }) */

        if ($(window).scrollTop() > 0) {
            $('.nav-cont').css({
                top: '0',
                backgroundColor: '#f0f5f7',
                opacity: 1,
                boxShadow: '-4px -3px 7px 0px #333',

            })

            //console.log("scroll top > 0")
        } else {
            $('.nav-cont').css({
                    top: upperHeight,
                    opacity: 0.8,
                    boxShadow: 'none'
                })
                //console.log("scroll top = 0")
        }

    });
    console.log($('.nav-cont').offset().top)

    // to make navbar top 0 after loading  

    if ($('.nav-cont').offset().top > upperHeight) { // 1 is border bottom

        $('.nav-cont').css({
            top: 0,
            backgroundColor: '#f0f5f7',
            opacity: 1,

        })

    } else {
        $('.nav-cont').css({
            top: upperHeight,

        })
    }


    // Caching The Main Element
    var scrollButton = $('#scroll-up');

    //  Show scrollButton after 500 hight 

    $(window).scroll(function() {

            if ($(this).scrollTop() >= 500) {

                scrollButton.fadeIn();

                //console.log("window scroll top is " + $(window).scrollTop())
                //console.log("scrollButton offset top is " + scrollButton.offset().top)


            } else {
                scrollButton.fadeOut()
            }

        })
        // Go top On click scrollButton

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 600)
    })

    var typed = new Typed('#typer', {
        strings: [
            "UI/UX DESIGNER",
            "ACADEMIC TRAINER ",
            "TEACHER"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });



    /* Flip Latest Post Cards */
    $(".latest-post .card-link").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().css({
            transform: 'rotateY(180deg)',
        })
    });
    $(".latest-post .back-front").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().css({
            transform: 'rotateY(0deg)',
        });


    });


    /* Hide Placeholder On Foucus & restore On blur */

    var placeAttr = '';

    $('.contact-cont input[placeholder]').focus(function(e) {

        e.preventDefault();

        placeAttr = $(this).attr('placeholder');

        console.log(placeAttr)

        $(this).attr('placeholder', '')

    }).blur(function() {

        $(this).attr('placeholder', placeAttr)
    });



    // Add Asterisk To All required field

    $('<span class="asterisk">*<span>').insertBefore('.contact-cont :input[required]');

    // Customize the asterisk with j query


    $('.asterisk').parent().css({
        'position': 'relative',
        'display': 'flex',
        'justify-content': 'flex-end'
    });

    $('.asterisk').each(function() {

        $(this).css({

            'position': 'absolute',

            'color': 'red',

            'font-weight': 'bold',

            'font-size': 'x-large',

            'margin-right': '15px'

        })

    })







    $('.contact-cont input[required]').on('keyup', function() {

        $(this).siblings('span').css('display', 'none');


    })

    // Show the message When the fields is empty
    $('.contact-cont input[required]').blur(function() {

        if ($(this).val() == '') {

            $(this).parent().prev('span').fadeIn().delay(2000).fadeOut();

            $(this).siblings('span').css('display', 'block');

        }
    })

    /* Email Suggest Box */
    var emailProviders = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'],
        finalString = '', //String For Email i Type inside Input Field
        thisString = '', //Temp Variable
        char = '@'; //To Check This Char Inside String
    $('.contact-cont :input[type="email"] ').on('keyup', function() {

        console.log("hiiii")
        finalString = ''; //Reset Vairable


        if (!($(this).next().is('.suggest-box'))) {

            $('<ul class="suggest-box"></ul>').insertAfter($(this)); // Create ul list After Email Input
        }

        if ($(this).val() == '') {

            $('.suggest-box').remove();
        }

        //To Get All Email Suggest In Array
        for (var i = 0; i < emailProviders.length; i++) {

            thisString = ''; //Make Sure To not Diplucate string

            thisString += $(this).val(); //Get New Value Every Time We Type 

            if (thisString.includes(char)) { // Check If String Has '@' 

                var n = thisString.indexOf(char); //Get Index Of '@'

                var result = thisString.slice(0, n); //Remove Everything After '@'

                finalString += '<li>' + result + '@' + emailProviders[i] + '</li>'; //Create String With '@' And All emails_arr Index's

            } else {

                //Create String With '@' And All emailProviders Index's

                finalString += '<li>' + thisString + '@' + emailProviders[i] + '</li>';
            }

        }

        $('.suggest-box').html(finalString).fadeIn(); //Put (li) Inside ul suggest box

    });

    $('body').on('click', '.suggest-box li', function() {

        $('.contact-cont :input[type="email"]').val($(this).text()); //Insert li

        $(this).parent().fadeOut(500)

    });





})






/**** js codes ****/

/* Text Typing Effects using Javascript */

var x = 0;
var textEffect = "FRONT END WEB";
var container = document.getElementById("typer");

function animate() {
    if (x < textEffect.length) {
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 400);

    } else {
        container.innerHTML = "";
        x = 0;
        setTimeout(animate, 400);
    }

}

//animate()



// Loading Screen 

$(window).load

// Loading Elements

$('.loading-overlay .loader-me ').fadeOut(1000,
    function() {

        $(this).parent().fadeOut(1000,

            function() {

                // Show the scroll

                $('body').css("overflow", "auto")

                $(this).remove();

            })
    });


// Capital letter for ecah word 

var featuredWorkParagraph = document.querySelector('.featured-work p').innerHTML;
var latestAchivmentParagraph = document.querySelector('.latest-post .disc').innerHTML;

var latestAchivmentParagraphAll = document.getElementsByClassName('card-text'); //same as document.querySelectorAll('.latest-post .card-text')
//console.log(latestAchivmentParagraphAll)
//console.log(latestAchivmentParagraphAll.length)

//console.log(latestAchivmentParagraphAll[1].innerText + latestAchivmentParagraphAll[2].innerText) // for loop instad

function capitalizeLeters(string) {

    var oldArray = string.split(' '),
        newArray = [];

    for (let i = 0; i < oldArray.length; i++) {

        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));

    }

    return newArray.join(" ")

}

document.querySelector('.featured-work p').innerHTML = capitalizeLeters(string = featuredWorkParagraph);

document.querySelector('.latest-post .disc').innerHTML = capitalizeLeters(string = latestAchivmentParagraph);

var index;

for (var index = 0; index < latestAchivmentParagraphAll.length; index++) {

    //console.log(latestAchivmentParagraphAll[index].innerHTML)

    latestAchivmentParagraphAll[index].innerHTML = capitalizeLeters(string = latestAchivmentParagraphAll[index].innerHTML);

}



var messageForm = document.querySelector('.contact-cont .form-group'),

    spanCounter = document.querySelector(".contact-cont .form-group span"),

    textArea = document.querySelector('.contact-cont .form-group .form-control'),

    maxLengthAttr = textArea.getAttribute('maxlength');

console.log(textArea)

console.log(maxLengthAttr)

console.log(textArea.value.length)

console.log(textArea.value)


textArea.oninput = function() {
    console.log(spanCounter) // <span>100</span>
    console.log(spanCounter.firstChild) // "100" string
    console.log(spanCounter.textContent) // 100 number
    console.log(maxLengthAttr)
    console.log(textArea.value.length)

    spanCounter.textContent = maxLengthAttr - this.value.length;

    if (spanCounter.textContent == 0) {

        spanCounter.classList.add('makeItRed')
    } else {
        spanCounter.classList.remove('makeItRed')
    }
}