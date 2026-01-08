// 1. Khởi tạo AOS
AOS.init({ duration: 1000, once: true });

// 2. Cursor Custom
const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// 3. Typewriter Effect
const messages = ["Creative Web Developer", "UI/UX Designer", "MOBA Player"];
let msgIndex = 0, charIndex = 0;
const typeBox = document.getElementById("type-text");

function type() {
    if (charIndex < messages[msgIndex].length) {
        typeBox.textContent += messages[msgIndex].charAt(charIndex++);
        setTimeout(type, 100);
    } else { setTimeout(erase, 2000); }
}
function erase() {
    if (charIndex > 0) {
        typeBox.textContent = messages[msgIndex].substring(0, --charIndex);
        setTimeout(erase, 50);
    } else {
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(type, 500);
    }
}
window.onload = type;

// 4. MOBA GAME LOGIC
const canvas = document.getElementById('mobaCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 900; canvas.height = 450;

let player = { x: 450, y: 225, tx: 450, ty: 225, speed: 3.5, size: 15 };
let projectiles = [];
let minions = [];

// Ngăn menu chuột phải trong canvas để di chuyển
canvas.oncontextmenu = (e) => e.preventDefault();

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.button === 2) { // Chuột phải để di chuyển
        player.tx = e.clientX - rect.left;
        player.ty = e.clientY - rect.top;
    }
});

window.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (['Q', 'W', 'E', 'R'].includes(key)) {
        const el = document.getElementById(`skill-${key}`);
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 150);

        // Bắn chiêu thức về hướng chuột
        projectiles.push({
            x: player.x, y: player.y, 
            vx: (cursor.offsetLeft - canvas.offsetLeft - player.x) / 20,
            vy: (cursor.offsetTop - (canvas.offsetTop - window.scrollY) - player.y) / 20,
            size: key === 'R' ? 12 : 6,
            color: key === 'R' ? '#7000ff' : '#00f2ff'
        });
    }
});

function spawnMinion() {
    if (minions.length < 5) {
        minions.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            hp: 100
        });
    }
}
setInterval(spawnMinion, 3000);

function gameLoop() {
    ctx.fillStyle = 'rgba(8, 8, 16, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Vẽ Grid nền
    ctx.strokeStyle = 'rgba(0, 242, 255, 0.05)';
    for(let i=0; i<canvas.width; i+=50) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,canvas.height); ctx.stroke(); }

    // Di chuyển nhân vật
    let dx = player.tx - player.x, dy = player.ty - player.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist > 5) {
        player.x += (dx/dist) * player.speed;
        player.y += (dy/dist) * player.speed;
    }

    // Vẽ nhân vật
    ctx.fillStyle = '#00f2ff';
    ctx.shadowBlur = 15; ctx.shadowColor = '#00f2ff';
    ctx.beginPath(); ctx.arc(player.x, player.y, player.size, 0, Math.PI*2); ctx.fill();

    // Xử lý đạn và lính
    projectiles.forEach((p, pi) => {
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();

        minions.forEach((m, mi) => {
            let d = Math.sqrt((p.x-m.x)**2 + (p.y-m.y)**2);
            if (d < 20) { minions.splice(mi, 1); projectiles.splice(pi, 1); }
        });
    });

    // Vẽ lính (Minions)
    minions.forEach(m => {
        ctx.fillStyle = '#ff4d4d'; ctx.shadowColor = '#ff4d4d';
        ctx.beginPath(); ctx.arc(m.x, m.y, 10, 0, Math.PI*2); ctx.fill();
    });

    ctx.shadowBlur = 0;
    requestAnimationFrame(gameLoop);
}
gameLoop();

// 5. Particles Nền
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40 },
        "color": { "value": "#00f2ff" },
        "opacity": { "value": 0.2 },
        "size": { "value": 2 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.1 },
        "move": { "enable": true, "speed": 1 }
    }
});
