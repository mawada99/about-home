$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 50,
        nav: true,
        loop: true,
        dots: false,
        navText: ['<h3 > <i class="ar1 fa-solid fa-arrow-left-long"></i></h3>', '<h3 ><i class=" ar2 fa-solid fa-arrow-right-long"></i> </h3>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                autoplay: false
            },
            // breakpoint from 480 up
            480: {

                // option2 : value,
                // ...
            },
            // breakpoint from 768 up
            768: {
                // option1 : value,
                // option2 : value,
                // ...
            }
        }
    });
});
var topBtn = document.getElementById("topBtn")
window.addEventListener("scroll", function () {
    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop > 300)
        topBtn.style.display = "block"
    else topBtn.style.display = "none"


})
var r=0
var p=0
 var i=0
 var u=400
var fc800 = document.getElementById("f8000")
window.addEventListener("scroll", function () {
    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop>=1100 &&document.documentElement.scrollTop<=1300) {
       
        var set = setInterval(() => {
            if (i == 8000) {
                clearInterval(set)
            }
             else{
                 i += 10
             fc800.innerText = i
             console.log(i)
             }

        }, 10)
    }







var f810 = document.getElementById("f810")

    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop>=1100 &&document.documentElement.scrollTop<=1300) {
      
        var set1 = setInterval(() => {
            if (p== 810) {
                clearInterval(set1)
            }
             else{
                 p += 1
                 f810.innerText = p
             console.log(p)
             }

        }, 10)
    }







var f2000 = document.getElementById("f2000")

    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop>=1100 &&document.documentElement.scrollTop<=1300) {
        
        var set2 = setInterval(() => {
            if (u == 2000) {
                clearInterval(set2)
            }
             else{
                 u += 2
                 f2000.innerText = u
             console.log(u)
             }

        }, 10)
    }




var f20 = document.getElementById("f20")

    console.log("wndow is scrolling")
    if (document.documentElement.scrollTop>=1100 &&document.documentElement.scrollTop<=1300 ) {
        
        var set3 = setInterval(() => {
            if (r == 20) {
                clearInterval(set3)
            }
             else{
                 r += 1
                 f20.innerText = r
             console.log(r)
             }

        }, 330)
    }


})






