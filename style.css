:root {
    --bg: #050507;
    --accent: #00f2ff;
    --accent-2: #7000ff;
    --glass: rgba(255, 255, 255, 0.03);
    --border: rgba(255, 255, 255, 0.1);
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none !important; }

body {
    background-color: var(--bg);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: white;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

#particles-js { position: fixed; width: 100%; height: 100%; z-index: 1; top: 0; left: 0; }

.custom-cursor {
    width: 15px; height: 15px; background: var(--accent);
    position: fixed; border-radius: 50%; pointer-events: none;
    z-index: 9999; mix-blend-mode: difference;
    transition: transform 0.1s ease;
}

/* Navbar */
header {
    position: fixed; top: 0; width: 100%; z-index: 1000;
    padding: 20px 50px;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px);
}

.navbar { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; }
.logo { font-family: 'Syncopate'; font-size: 20px; font-weight: 700; letter-spacing: 2px; }
.logo span { color: var(--accent); }
.nav-links { display: flex; list-style: none; gap: 30px; }
.nav-links a { color: white; text-decoration: none; font-size: 14px; font-weight: 500; opacity: 0.7; transition: 0.3s; }
.nav-links a:hover { opacity: 1; color: var(--accent); }

/* Main Wrapper */
.main-wrapper { position: relative; z-index: 2; padding-top: 120px; display: flex; flex-direction: column; align-items: center; }

.hero-glass {
    width: 90%; max-width: 900px; padding: 80px 40px;
    background: var(--glass); border-radius: 40px;
    border: 1px solid var(--border); backdrop-filter: blur(20px);
    text-align: center; margin-bottom: 50px;
}

.avatar-box { position: relative; width: 160px; height: 160px; margin: 0 auto 30px; }
.avatar-box img { width: 100%; height: 100%; border-radius: 40px; transform: rotate(-8deg); border: 2px solid var(--accent); }
.pulse-ring { position: absolute; width: 100%; height: 100%; border: 2px solid var(--accent); border-radius: 40px; animation: pulse 2s infinite; z-index: -1; }

@keyframes pulse {
    0% { transform: scale(1) rotate(-8deg); opacity: 1; }
    100% { transform: scale(1.3) rotate(-8deg); opacity: 0; }
}

.main-title { font-family: 'Syncopate'; font-size: clamp(2rem, 8vw, 3rem); margin: 20px 0; }
.gradient-text { background: linear-gradient(90deg, var(--accent), var(--accent-2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

/* Grid */
.content-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; width: 90%; max-width: 900px; margin-bottom: 100px; }
.mini-card { background: var(--glass); padding: 40px; border-radius: 30px; border: 1px solid var(--border); text-align: center; transition: 0.4s; }
.mini-card:hover { border-color: var(--accent); transform: translateY(-10px); background: rgba(255,255,255,0.06); }
.mini-card i { font-size: 35px; color: var(--accent); margin-bottom: 20px; }

/* Footer */
.social-footer { position: relative; z-index: 2; padding-bottom: 50px; text-align: center; }
.footer-links { display: flex; justify-content: center; gap: 25px; margin-bottom: 20px; }
.footer-links a { color: white; font-size: 22px; opacity: 0.6; transition: 0.3s; }
.footer-links a:hover { opacity: 1; color: var(--accent); transform: scale(1.2); }
