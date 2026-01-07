:root {
    --bg: #0a0a0c;
    --accent: #00f2ff;
    --accent-2: #7000ff;
    --glass: rgba(255, 255, 255, 0.03);
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }

body {
    background-color: var(--bg);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: white;
    overflow-x: hidden;
}

#particles-js { position: fixed; width: 100%; height: 100%; z-index: 1; }

.main-wrapper {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; align-items: center;
    padding: 100px 20px;
}

/* Glass Card 3D */
.hero {
    width: 100%; max-width: 900px;
    background: var(--glass);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 40px;
    padding: 60px;
    margin-bottom: 40px;
    transition: all 0.3s;
}

.avatar-box { position: relative; margin-bottom: 30px; }
.avatar-box img {
    width: 150px; height: 150px; border-radius: 40px;
    transform: rotate(-10deg); border: 2px solid var(--accent);
}

.pulse-ring {
    position: absolute; top: 0; left: 0; width: 150px; height: 150px;
    border: 2px solid var(--accent); border-radius: 40px;
    animation: pulse 2s infinite; z-index: -1;
}

@keyframes pulse {
    0% { transform: scale(1) rotate(-10deg); opacity: 1; }
    100% { transform: scale(1.4) rotate(-10deg); opacity: 0; }
}

.main-title {
    font-family: 'Syncopate', sans-serif;
    font-size: clamp(2rem, 8vw, 4rem);
    line-height: 1; margin: 20px 0;
}

.gradient-text {
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

/* Skill Tags */
.skill-tags { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 30px; }
.skill-tags span {
    background: rgba(255,255,255,0.05);
    padding: 8px 20px; border-radius: 100px;
    font-size: 13px; border: 1px solid rgba(255,255,255,0.1);
}

/* Content Grid */
.content-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px; width: 100%; max-width: 900px;
}

.mini-card {
    background: var(--glass); padding: 30px;
    border-radius: 30px; text-align: center;
    border: 1px solid rgba(255,255,255,0.05);
}

.mini-card i { font-size: 2rem; color: var(--accent); margin-bottom: 15px; }

/* Custom Cursor (The secret for "Expensive" feel) */
.custom-cursor {
    width: 20px; height: 20px; background: var(--accent);
    position: fixed; border-radius: 50%; pointer-events: none;
    z-index: 9999; mix-blend-mode: difference;
}
