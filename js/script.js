/*
 * STAGGER ANIMATION
 */
document.querySelectorAll(".animate-stagger").forEach(el => {
    const content = el.innerHTML;
    const parts = content.split(/(<br\s*\/?>)/i);
    const wrapped = parts.map(part =>
        part.match(/<br\s*\/?>/i)
            ? part
            : part.split(/\s+/).map(word => word ? `<span>${word}</span>` : '').join(" ")
    ).join(" ");
    el.innerHTML = wrapped;

    gsap.to(el.querySelectorAll("span"), {
        x: 0,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.1
    });
});

/*
 * CARDS ARC FLY-IN
 */
const cards = document.querySelectorAll(".animate-card");
const total = cards.length;
const radius = 300;
const arcSpread = 70;
const centerY = 150;

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
