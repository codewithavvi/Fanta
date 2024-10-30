var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-2",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    },
});

tl.to("#fanta", {
    top: "120%",
    left: "4%"
}, "orange")

tl.to("#orange-cut", {
    top: "155%",
    left: "20%"
}, "orange")

tl.to("#orange", {
    top: "170%",
    right: "10%",
    width:"15%"
}, "orange")

tl.to("#leaf", {
    top: "110%",
    left: "75%",
    rotate:"130deg",
    width:"15%"
}, "orange")






var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page-3",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
    },
});

tl2.to("#fanta",{
    top:"217%",
    left:"35%",
    width:"30%"
},"ora")

tl2.to("#orange-cut",{
    top:"204%",
    left:"42.5%",
    
},"ora")