// Smooth Fade-in Effect for Vehicles
document.addEventListener("DOMContentLoaded", function () {
    let vehicles = document.querySelectorAll(".vehicle");
    vehicles.forEach((vehicle, index) => {
        setTimeout(() => {
            vehicle.style.opacity = "1";
            vehicle.style.transform = "translateY(0)";
        }, index * 300);
    });
});
