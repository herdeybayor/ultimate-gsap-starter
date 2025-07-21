import gsap from "gsap";

// Select all toast elements
const toasts = document.querySelectorAll(".toast");

// Animation timing constants
const APPEAR_DURATION = 0.8;
const STAY_DURATION = 2.5;
const DISAPPEAR_DURATION = 0.7;
const TOTAL_CYCLE_TIME = APPEAR_DURATION + STAY_DURATION + DISAPPEAR_DURATION;

// Loop through toasts and animate each with calculated delay
toasts.forEach((toast, index) => {
    const delay = index * TOTAL_CYCLE_TIME;

    // Toast appears and rises up
    gsap.to(toast, {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: APPEAR_DURATION,
        ease: "power4.out",
        delay: delay,
        onComplete: () => {
            // After staying visible, toast slides away
            gsap.to(toast, {
                y: -200,
                opacity: 0,
                scale: 0.95,
                duration: DISAPPEAR_DURATION,
                ease: "power2.in",
                delay: STAY_DURATION,
            });
        },
    });
});
