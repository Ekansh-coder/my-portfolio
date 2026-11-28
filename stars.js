const canvas = document.getElementById("stars")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const stars = [];

for (let i=0; i<80; i++) {
    stars.push({ //all th attributes of the stars
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        fallspeed: Math.random() * 0.4 + 0.1,
        alpha: Math.random(),
        twinklespeed: Math.random() * 0.02 + 0.005
    });
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    for (const s of stars){
        s.y += s.fallspeed;
        if (s.y > canvas.height) 
            s.y = 0;

        s.alpha += s.twinklespeed;
        if (s.alpha >= 1 || s.alpha <= 0.1) 
            s.twinklespeed *= -1;

        ctx.fillStyle = `rgba(224, 242, 254, ${s.alpha})`;
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
        ctx.fill();
    }
    requestAnimationFrame(draw);
}

draw();

const music = document.getElementById("bg-music");
music.volume = 0.3;

function playmusic() {
    music.play();
}

document.addEventListener("click", playmusic)
document.addEventListener("keydown", playmusic)