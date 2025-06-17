/*
 * CARDS ARC FLY-IN
 */
const cardContainer = document.querySelector(".card-container");
const radius = parseFloat(cardContainer.dataset.radius) || 300;
const arcSpread = parseFloat(cardContainer.dataset.arcSpread) || 70;
const centerY = parseFloat(cardContainer.dataset.centerY) || 150;
const cards = document.querySelectorAll(".animate-card");
const total = cards.length;

cards.forEach((card, index) => {
    const angleDeg = gsap.utils.mapRange(0, total - 1, -arcSpread / 2, arcSpread / 2, index);
    const angleRad = angleDeg * Math.PI / 180;
    const x = Math.sin(angleRad) * radius;
    const y = -Math.cos(angleRad) * radius + centerY;

    gsap.fromTo(card, {
        x: 0,
        y: 100,
        opacity: 0,
        rotation: 0
    }, {
        delay: index * 0.15,
        duration: 0.8,
        x: x,
        y: -y,
        rotation: angleDeg,
        opacity: 1,
        ease: "power3.out",
        onUpdate() {
            card.style.setProperty('--rotation', this.targets()[0]._gsap.rotation + 'deg');
        },
        onComplete() {
            card.style.setProperty('--rotation', angleDeg + 'deg');
        }
    });
});

