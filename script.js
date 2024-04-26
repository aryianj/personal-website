document.addEventListener("DOMContentLoaded", function() {
    var type = document.getElementById('type');

    var typewriter = new Typewriter(type, {
        loop: true
    });

    typewriter.typeString('aspiring software engineer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('aspiring web developer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('computer science student')
        .pauseFor(2500)
        .deleteAll()
        .typeString('pronounced uh + ryan')
        .start();
});
