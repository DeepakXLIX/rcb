

gsap.to('#starterPack .container .row .common-cls:first-child h1', {
    x: -20,
    scrollTrigger: {
        trigger: "#starterPack .container .row .common-cls:first-child h1",
        scroller: "body",
        start: "top 20%",
        end:"top 0%",
        scrub: 2,
      
    }
})