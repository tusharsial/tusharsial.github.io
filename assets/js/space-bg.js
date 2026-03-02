document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    canvas.id = "starfield";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    const stars = [];
    const numStars = 300;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.15 + 0.02
        });
    }

    function animate() {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let star of stars) {
            star.z -= star.speed;

            if (star.z <= 0) {
                star.x = Math.random() * canvas.width;
                star.y = Math.random() * canvas.height;
                star.z = canvas.width;
            }

            const k = 128.0 / star.z;
            const px = star.x * k + canvas.width / 2;
            const py = star.y * k + canvas.height / 2;

            if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
                const size = (1 - star.z / canvas.width) * 2;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill();
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
});
