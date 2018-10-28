const timing0 = new TimelineMax()
const timing1 = new TimelineMax()

timing0.to(".bg-animation", 2, {width: 720, ease: Power4.easeInOut})
       .to(".bg-animation", 0.1, {width: 0, ease: Power0.easeNone})
       .to(".left", 0.1, {opacity: 1, ease: Power0.easeNone})
       .staggerFrom(".left-elem", 1, {y: 1000, ease: Cubic.easeOut}, 0.1)       
       .staggerFrom(".right-elem0", 3, {opacity: 0, right: -100, ease: Power3.easeOut}, 0.4)
       .to(".right-elem1", 1, {opacity: 1, delay: -3.8, ease: Cubic.easeOut})
       .to(".nav-bar", 1.5, {opacity: 1, delay: -3.8, ease: Power0.easeNone})
       .to(".footer", 1.5, {opacity: 1, delay: -3.8, ease: Power0.easeNone})
       .to(".woman-bg", 3, {opacity: 1, delay: -4.6, ease: Back.easeOut})
       .to(".woman", 3, {scale: 1, opacity: 1, delay: -4.6, ease: Back.easeOut})
       .fromTo(".half-circle", 3.5, {scale: 0}, {opacity: 1, scale: 1, delay: -3.5, ease: Power3.easeOut})
       .to(".dream", 4, {opacity: 1, delay: -3.0, ease: Cubic.easeOut})
       .addCallback(scroll, 6)
       .staggerTo(".logo", 2, {transform: "rotateY(180deg)", delay: -11, repeat: -1, yoyo: true})
       
       

$(".header-elem, .small-title-content").mouseover(() => {
    TweenLite.to([".header-elem:hover", ".small-title-content:hover", ".picture:hover"], 0.4, {scale: 1.2, ease: Power4.easeOut})
})   

$(".header-elem, .small-title-content").mouseout(() => {
    TweenMax.to([".header-elem", ".small-title-content", ".picture"], 0.5, {scale: 1, ease: Power4.easeOut})
})   

function scroll() {
    const scroll = document.querySelector(".container")
    scroll.addEventListener('wheel', () => {
        timing1.staggerTo([".left", ".mid", ".right"], 1.5, {top: -800, ease: Power4.easeOut}, 0.2)
               .staggerTo([".left1", ".mid1", ".right1"], 1.5, {top: -678, opacity: 1, ease: Power4.easeOut}, 0.2)
    })
}
