// Hàm điều khiển Modal Game
function openGame() {
    document.getElementById('gameModal').style.display = 'flex';
    // Khởi tạo lại loop game nếu cần
    requestAnimationFrame(gameLoop);
}

function closeGame() {
    document.getElementById('gameModal').style.display = 'none';
}

// Logic MOBA GAME (Giữ nguyên phần trước nhưng bọc trong loop)
const canvas = document.getElementById('mobaCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1000; canvas.height = 500;

let player = { x: 500, y: 250, tx: 500, ty: 250, speed: 4, size: 15 };
let projectiles = [];
let minions = [];

canvas.oncontextmenu = (e) => e.preventDefault();

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.button === 2) { 
        player.tx = (e.clientX - rect.left) * (canvas.width / rect.width);
        player.ty = (e.clientY - rect.top) * (canvas.height / rect.height);
    }
});

// Xử lý phím kỹ năng
window.addEventListener('keydown', (e) => {
    if (document.getElementById('gameModal').style.display !== 'flex') return;
    
    const key = e.key.toUpperCase();
    if (['Q', 'W', 'E', 'R'].includes(key)) {
        const el = document.getElementById(`skill-${key}`);
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 150);

        // Bắn về hướng chuột hiện tại
        projectiles.push({
            x: player.x, y: player.y,
            vx: (player.tx - player.x) / 15,
            vy: (player.ty - player.y) / 15,
            size: key === 'R' ? 15 : 7,
            color: key === 'R' ? '#7000ff' : '#00f2ff'
        });
    }
});

function gameLoop() {
    if (document.getElementById('gameModal').style.display !== 'flex') return;

    ctx.fillStyle = 'rgba(8, 8, 16, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Di chuyển nhân vật
    let dx = player.tx - player.x, dy = player.ty - player.y;
    let dist = Math.sqrt(dx*dx + dy*dy);
    if (dist > 5) {
        player.x += (dx/dist) * player.speed;
        player.y += (dy/dist) * player.speed;
    }

    // Vẽ lính và đạn
    ctx.shadowBlur = 10;
    projectiles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
    });

    // Vẽ người chơi
    ctx.fillStyle = '#00f2ff';
    ctx.beginPath(); ctx.arc(player.x, player.y, player.size, 0, Math.PI*2); ctx.fill();

    requestAnimationFrame(gameLoop);
}
