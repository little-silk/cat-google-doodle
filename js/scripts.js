// Black cat peeking

gsap.to(".catPeekingMove", {
  y: -5,
  repeat: -1,
  yoyo: true,
  repeatDelay: 5,
  duration: 1,
  ease: "none"
});

// Orange cat scratching
const stage = document.querySelector("#stage");

letterL.addEventListener("mouseenter", () => {
  gsap.to(".orangeCat", {
    duration: 3,
    y: 60
  });
});

// Sleeping cat tail swish
var swish = gsap.timeline({ repeat: -1, yoyo: true }),
  graySleepingCat = document.getElementById("sleepingCat");

swish
  .to(graySleepingCat, { morphSVG: "#sleepingCat", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat2", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat3", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat4", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat5", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat6", ease: "none" })
  .to(graySleepingCat, { morphSVG: "#sleepingCat7", ease: "none" });

// Itching cat scratch
gsap.to(".itchingCatMove", {
  repeat: -1,
  repeatDelay: 0,
  duration: 0.1,
  ease: "none",
  yoyo: true,
  rotation: 23,
  transformOrigin: "50% 70%"
});

// Licking cat

var lick = gsap.timeline({ repeat: -1, yoyo: true, ease: "none" }),
  catTongue = document.getElementsByClassName("catLickingTongue"),
  catOrange = document.getElementsByClassName("catLickingOrange1"),
  catBrown = document.getElementsByClassName("catLickingBrown1"),
  catEye = document.getElementsByClassName("catLickingEye1");
Cat = document.getElementsByClassName("catLicking");
lick
  .to(Cat, { morphSVG: ".catLicking" }, "start")
  .to(Cat, { morphSVG: ".catLicking2" }, "start")
  .to(catTongue, { morphSVG: ".catLickingTongue" }, "start")
  .to(catTongue, { morphSVG: ".catLickingTongue2" }, "start")
  .to(catOrange, { morphSVG: ".catLickingOrange1" }, "start")
  .to(catOrange, { morphSVG: ".catLickingOrange2" }, "start")
  .to(catBrown, { morphSVG: ".catLickingBrown1" }, "start")
  .to(catBrown, { morphSVG: ".catLickingBrown2" }, "start")
  .to(catEye, { morphSVG: ".catLickingEye1" }, "start")
  .to(catEye, { morphSVG: ".catLickingEye2" }, "start");