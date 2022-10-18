const menuBtn = document.querySelector(".menu-btn");
const ul = document.querySelector("ul");
const middleLogo = document.querySelector(".middleLogoContainer");
const tiltEffectSettings = {
  max: 5,
  perspective: 1000,
  scale: 1.15,
  speed: 500,
  easing: "cubic-bezier(.03, .98, .52, .99",
};

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    ul.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    ul.classList.remove("open");
  }
});

middleLogo.addEventListener("mouseenter", middleLogoMouseEnter);
middleLogo.addEventListener("mousemove", middleLogoMouseMove);
middleLogo.addEventListener("mouseleave", middleLogoMouseLeave);

function middleLogoMouseEnter(event) {}

function middleLogoMouseMove(event) {
  const middleLogoWidth = middleLogo.offsetWidth;
  const middleLogoHeight = middleLogo.offsetHeight;
  const centerX = middleLogo.offsetLeft + middleLogoWidth / 2;
  const centerY = middleLogo.offsetTop + middleLogoHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateX = (
    (+1 * tiltEffectSettings.max * mouseY) /
    (middleLogoHeight / 2)
  ).toFixed(2);
  const rotateY = (
    (-1 * tiltEffectSettings.max * mouseX) /
    (middleLogoWidth / 2)
  ).toFixed(2);
  middleLogo.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function middleLogoMouseLeave(event) {
  middleLogo.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  setTransition();
}

function setTransition() {
  clearTimeout(middleLogo.transitionTimeoutId);
  middleLogo.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  middleLogo.transitionTimeoutId = setTimeout(() => {
    middleLogo.style.transition = "";
  }, tiltEffectSettings.speed);
}
