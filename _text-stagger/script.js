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