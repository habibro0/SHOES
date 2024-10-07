gsap.from("#left",{
    width: 0,
    duration:4,
    delay:0.8,
    scale:1,
    ease: Expo.easeInout

})
gsap.from("#right",{
    width: 0,
    duration:4,
    delay:0.8,
   scrub:true,
    // /
    ease: Expo.easeInout

})
gsap.from("#right #img ji",{
    width: 0,
    duration:4,
    delay:0.8,
   scrub:true,
    scale:5,
    ease: Expo.easeInout

})