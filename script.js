// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();



// *************************


gsap.from(".nav a",{
    x:"-200px",
    opacity:0,
    duration:1,
    Delay:.5,
})

gsap.to(".nav h1",{
    opacity:1,
    duration:1,
    Delay:0.5,
    scrollTrigger: {
        trigger: ".nav h1",
        scroller: "body",
        // markers:true,
        scrub: 2,
        start:"top 0%",
        end:"top 5%",
      }
})

gsap.to(".page1 h1",{
    opacity:0,
    y:"120px",
    scale:"0px",
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: "body",
        // markers:true,
        scrub: 0.7,
        start:"top 12%",
        end:"top 0%",
      }
})


gsap.to(".role h1", {
    // transform:"translateX(-100%)",
    transform: "translateX(calc(-70% - 2vw - 4px))",
    scrollTrigger: {
      trigger: ".role h1",
      scroller: "body",
    //   markers:true,
      scrub: 2,
      start:"top 75%",
      end:"top 5%",
    }
  })

gsap.from(".elem-div img", {
    scale:0,
    opacity:0,
    rotate:30,
    // duration:1,
    stagger:0.1,
    yoyo:true,
    scrollTrigger:{
        trigger:".box",
        scroller: "body",
        // markers:true,
        scrub:true,
        // pin:true,
        start:"top 80%",
        end:"top 10%",
    }
})

gsap.from(".elem img", {
    scale:0,
    opacity:0,
    rotate:30,
    // duration:1,
    stagger:0.1,
    // yoyo:true,
    scrollTrigger:{
        trigger:".elem img",
        scroller: "body",
        markers:true,
        scrub:true,
        // pin:true,
        start:"bottom 100%",
        end:"bottom 80%",
    }
})

gsap.from(".work-sample img",{
    scale:0,
    opacity:0,
    // duration:2,
    stagger:0.1,
    rotate:15,
    scrollTrigger:{
        trigger:".work-sample",
        scroller: "body",
        // markers:true,
        scrub:true,
        // pin:true,
        start:"top 100%",
        end:"bottom 100%",
    }
})


//            js
// document.addEventListener("keydown", function (event){
//     if (event.ctrlKey){
//        event.preventDefault();
//     }
//     if(event.keyCode == 123){
//        event.preventDefault();
//     }
// });

// document.addEventListener('contextmenu', 
//      event => event.preventDefault()
// );

linkedin.addEventListener("click", function (event){
    document.location.href = 'https://linkedin.com/in/therishuraj/' ;
})

gmail.addEventListener("click", function (event){
    document.location.href = 'mailto:rishurajsalarpur@gmail.com';
})

github.addEventListener("click", function (event){
    document.location.href = 'https://github.com/therishuraj/';
})

insta.addEventListener("click", function (event){
    document.location.href = 'https://instagram.com/therishurazz/';
})

x.addEventListener("click", function (event){
    document.location.href = 'https://twitter.com/therishuraj/';
})
