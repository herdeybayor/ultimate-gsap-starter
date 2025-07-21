import gsap from "gsap";

// Get the card element
const card = document.getElementById("card");

// Create hover animation - flip to show back
card.addEventListener("mouseenter", () => {
    gsap.to(card, {
        rotationY: 180,
        duration: 0.8,
        ease: "power2.inOut",
    });
});

// Create mouse leave animation - flip back to show front
card.addEventListener("mouseleave", () => {
    gsap.to(card, {
        rotationY: 0,
        duration: 0.8,
        ease: "power2.inOut",
    });
});

// Optional: Add entrance animation using gsap.from()
gsap.from(card, {
    scale: 0.8,
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 0.2,
});
