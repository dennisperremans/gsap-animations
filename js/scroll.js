/*
 *
 * SCROLL TEXT ANIMATION
 */

gsap.registerPlugin(ScrollTrigger);

// Split text into words
document.querySelectorAll('.animated-scroll-text').forEach(el => {
  const wordsScroll = el.textContent.split(' ');
  el.innerHTML = wordsScroll.map(word => `<span class="word-scroll">${word}</span>`).join(' ');
});

const wordsScroll = document.querySelectorAll('.word-scroll');

// Animate each word outwards on scroll
wordsScroll.forEach((word, i) => {
  const angle = (i / wordsScroll.length) * Math.PI * 2; // circular direction
  const x = Math.cos(angle) * 500; // adjust distance
  const y = Math.sin(angle) * 500;

  gsap.to(word, {
    x,
    y,
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });
});