const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });
tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: 0 },
  {
    scale: 1,
    delay: 0.3,
    duration: 2.5,
    borderRadius: "25px",
    ease: "elastic.out(1.2, 1)",
  }
);
tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta4", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "-100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".text-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
const logo = document.querySelector(".logo");
const letters = logo.innerText.split("");
logo.innerHTML = "";
letters.forEach((e) => {
  logo.innerHTML += ` <span class="letter"> ${e} </span>`;
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(".letter", { y: 30 }, { y: 0, delay: 2, stagger: 0.2 });
// gsap.fromTo(".letter", { y: 20 }, { y: 0, delay: 2, stagger: 0.5 });
setTimeout(() => {
  gsap.set(".hero-sec", { overflow: "hidden" });
}, 4000);
