function loading() {
    var tl = gsap.timeline();


    tl.to(".loader .yellow1 ", {
        top: "-100%",
        delay: 0.2,
        duration: .5,
        ease: "expo.out"

    })
    tl.from(".loader .yellow2 ", {
        top: "100%",
        delay: 0.5,
        duration: .5,
        ease: "expo.out"

    }, "anim")
    tl.to(".loader  h1 ", {
        delay: 0.2,
        duration: .5,
        color: "black",
        delay: .1,
    }, "anim")
    tl.to(".loader  ", {
        opacity: 0,

    })
    tl.to(".loader  ", {

        display: "none"
    })
}
loading()



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
    lerp: 0.05
});

var elem = document.querySelectorAll(".elem")
var page = document.querySelector(".page2")
elem.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var name = e.getAttribute('data-img')
        page.style.backgroundImage = `url(${name})`
    })

})

var top = document.querySelector(".footer .title .h1")
top.addEventListener("click", () => {
    scroll.scrollTo(0)

})
let a = 0;

const rotateI = () => {
    var button = document.querySelector(".symbol i");
    var text = document.querySelector(".element ");
    if (a == 0) {
        button.style.transform = "rotate(180deg)"
        a = 1;
        text.style.transform = "translateX(-20%)"

      
    }
    else {
        button.style.transform = "rotate(-45deg)"
        text.style.transform = "translateX(20%)"

        a = 0;
    }
}