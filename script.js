var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + 30 + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 150 + "px";
  cursorBlur.style.top = dets.y - 150 + "px";
});

// var h4 = document.querySelectorAll(".nav h4");
// h4.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     // h4.style.color = "#95c11e";
//     cursor.style.scale = 4;
//     cursor.style.border = "0.5px solid #fff";
//     cursor.style.backgroundColor = "transparent";
//   });

//   elem.addEventListener("mouseleave", function () {
//     cursor.style.scale = 1;
//     cursor.style.border = "0px solid #95c11e";
//     // cursor.style.backgroundColor = "#95c11e";
//   });
// });

gsap.to(".nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from(".about-us img, .about-us-in", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger:{
    // markers: true,
    trigger: '.about-us',
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    scrub: 3,
  }
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger:{
    // markers: true,
    trigger: '.card',
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    scrub: 2,
  }
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 40%",
    scrub: 2
  }
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 100%",
    scrub: 4,
  },
});

gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroll: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 3
  }
})