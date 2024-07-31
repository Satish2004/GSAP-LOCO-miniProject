
// ======Animation with GSAP======>
function loadingPage(){

    var tl = gsap.timeline();

tl.to("#yellow",{
    top:"-100%",
    ease: "expo.out",
    duration:0.2,
    opacity:0
})
tl.to("#loader video",{
    top:"-100%",
    delay:0.8,
    duration:0.2
})
tl.to("#loader",{
    top:"-100%",
    delay:-0.2,
    duration:0.2
})



}
loadingPage()
// ================LOCOMOTIVE js===========>
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#container'),
        smooth: true
    });
