// efecto del titulo principal h1: se detiene al hacer click
document.addEventListener("DOMContentLoaded", function() {
    let animatedTitle = document.getElementById("animatedTitle"); // Asegúrate de que el ID coincida con el utilizado en el HTML
    
    document.addEventListener("click", function() {
        animatedTitle.style.animationPlayState = "paused";
    });
});

//  efecto desplazamiento lateral del titulo principal h1
document.getElementById('animatedTitle').style.setProperty('--random-translate', (Math.random() - 0.5) * 40 + 'px');

