:root {
    --primary-color: #00d2ff;
    --secondary-color: #9d50bb;
    --bg-dark: #050505;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg-dark);
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.container {
    z-index: 2;
    width: 100%;
    max-width: 420px;
    padding: 20px;
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
    transition: transform 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
}

.avatar-wrapper img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--primary-color);
    margin-bottom: 20px;
    object-fit: cover;
    box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
}

.name {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 8px;
    background: linear-gradient(to right, #00d2ff, #9d50bb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.title {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 25px;
}

.badges {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
}

.badge {
    background: rgba(255, 255, 255, 0.08);
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--primary-color);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 35px;
}

.social-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-icon:hover {
    background: var(--primary-color);
    color: var(--bg-dark);
    transform: scale(1.1);
}

.btn-contact {
    width: 100%;
    padding: 15px;
    border-radius: 20px;
    border: none;
    background: white;
    color: black;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;
}

.btn-contact:hover {
    background: var(--primary-color);
    letter-spacing: 1px;
}
