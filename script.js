
:root {
  --bg: #050505;
  --panel: #0c0c0c;
  --line: #292929;
  --white: #fff;
  --muted: #929292;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--white);
  font-family: Arial, sans-serif;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(ellipse at 50% 0%, #33333340, transparent 65%);
}

button, input, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }

button {
  cursor: pointer;
  padding: 11px 16px;
  border: 1px solid #fff;
  border-radius: 9px;
  background: #fff;
  color: #000;
  font-weight: bold;
  transition: background .2s, color .2s, transform .2s, box-shadow .2s;
}

button:hover {
  background: #ccc;
  transform: translateY(-2px);
  box-shadow: 0 0 22px #ffffff20;
}

a { color: inherit; text-decoration: none; }

.topbar {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px 6%;
  border-bottom: 1px solid #292929;
  background: #050505ed;
  backdrop-filter: blur(16px);
}

.logo {
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 4px;
  text-shadow: 0 0 20px #ffffff60;
}

.logo span { color: #888; }

nav { display: flex; align-items: center; gap: 20px; }
nav a { color: #aaa; font-size: 13px; }
nav a:hover { color: white; }

.outline {
  background: #090909;
  color: white;
  border-color: #383838;
}

.outline:hover { background: #222; }

main {
  position: relative;
  z-index: 1;
  width: min(850px, 100%);
  margin: auto;
  padding: 25px 20px;
}

.hero { text-align: center; padding: 40px 0 28px; }

.eyebrow {
  color: #aaa;
  font-size: 11px;
  letter-spacing: 4px;
}

.hero h1 {
  margin: 18px 0 12px;
  font-size: clamp(42px, 8vw, 66px);
  line-height: 1.05;
  letter-spacing: -3px;
}

.hero h1 span { color: #777; }

.hero > p { color: var(--muted); font-size: 14px; }

.search {
  display: flex;
  gap: 8px;
  max-width: 470px;
  margin: 25px auto;
}

input, textarea {
  width: 100%;
  min-width: 0;
  padding: 13px;
  border: 1px solid #333;
  border-radius: 9px;
  outline: none;
  background: #101010;
  color: white;
}

input:focus, textarea:focus {
  border-color: #aaa;
  box-shadow: 0 0 14px #ffffff12;
}

.card {
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 15px;
  background: linear-gradient(145deg, #111, #070707);
  box-shadow: 0 15px 45px #0009;
}

.profile { transition: border-color .3s; }
.profile:hover { border-color: #444; }

.banner {
  position: relative;
  height: 145px;
  overflow: hidden;
  border: 1px solid #292929;
  border-radius: 10px;
  background: linear-gradient(120deg, #050505, #292929, #080808);
}

.banner::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 20%, #ffffff20 48%, transparent 70%);
  transform: translateX(-100%);
  animation: shine 7s infinite;
}

.banner-mark {
  position: absolute;
  right: 20px;
  top: -55px;
  color: #ffffff09;
  font-size: 220px;
  font-weight: 900;
  transform: rotate(-10deg);
}

@keyframes shine {
  to { transform: translateX(100%); }
}

.profilehead {
  position: relative;
  display: flex;
  align-items: end;
  gap: 16px;
  margin: -36px 0 18px 15px;
}

.avatar {
  display: grid;
  flex-shrink: 0;
  place-items: center;
  width: 85px;
  height: 85px;
  border: 3px solid #080808;
  outline: 1px solid #777;
  border-radius: 50%;
  background: radial-gradient(circle, #454545, #080808 72%);
  box-shadow: 0 0 24px #ffffff18;
  font-size: 30px;
  font-weight: 900;
}

.identity h2 { margin: 0 0 7px; font-size: 23px; }

.handle { color: #aaa; font-size: 12px; }

.online {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: 5px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 9px white;
}

.bio { margin: 15px 0; color: #bbb; font-size: 14px; line-height: 1.7; }

.stats { display: flex; gap: 28px; margin: 20px 0; }

.stats div { display: grid; gap: 5px; }
.stats strong { font-size: 18px; }
.stats span { color: #888; font-size: 12px; }

.socials { display: flex; flex-wrap: wrap; gap: 9px; }

.socials a {
  padding: 11px 14px;
  border: 1px solid #333;
  border-radius: 8px;
  background: #080808;
  font-size: 12px;
  transition: .25s;
}

.socials a:hover {
  color: #000;
  border-color: white;
  background: white;
  transform: translateY(-3px);
  box-shadow: 0 0 20px #ffffff20;
}

.energy-line {
  height: 1px;
  margin: 25px 0;
  background: linear-gradient(90deg, transparent, #666, white, #666, transparent);
  animation: linePulse 3s infinite;
}

@keyframes linePulse {
  50% { opacity: .3; }
}

.tabs { display: flex; gap: 10px; border-bottom: 1px solid #292929; }

.tab {
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #888;
}

.tab.active { color: white; border-bottom: 2px solid white; }
.tab:hover { background: #151515; }

.post-form { display: flex; gap: 8px; margin: 16px 0; }

.post {
  margin-top: 12px;
  padding: 14px;
  border: 1px solid #292929;
  border-radius: 10px;
  animation: appear .3s ease;
}

.post small { color: #888; font-size: 10px; }
.post p { font-size: 14px; line-height: 1.6; overflow-wrap: anywhere; }

@keyframes appear {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.bottom-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 20px;
}

.bottom-grid h3 { font-size: 12px; letter-spacing: 2px; }
.muted { color: #999; font-size: 13px; line-height: 1.7; }

footer {
  position: relative;
  z-index: 1;
  padding: 30px 12px;
  color: #666;
  text-align: center;
  font-size: 11px;
  letter-spacing: 2px;
}

#particles {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  bottom: -15px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 10px white;
  animation: rise linear infinite;
}

@keyframes rise {
  0% { transform: translate(0, 0); opacity: 0; }
  15% { opacity: .65; }
  85% { opacity: .3; }
  100% { transform: translate(35px, -110vh); opacity: 0; }
}

.modal {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  padding: 18px;
  background: #000d;
  backdrop-filter: blur(8px);
}

.modal.open { display: flex; }

.modal-card {
  width: 100%;
  max-width: 430px;
  max-height: 90vh;
  overflow-y: auto;
  animation: appear .25s ease;
}

.modal-card h2 { margin-top: 0; }
.modal-card label { display: block; margin: 15px 0 7px; color: #aaa; font-size: 12px; }

.actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }

#toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  z-index: 20;
  max-width: 90%;
  padding: 12px 18px;
  border-radius: 9px;
  background: white;
  color: black;
  font-size: 13px;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, 15px);
  transition: .25s;
}

#toast.show { opacity: 1; transform: translate(-50%, 0); }

[hidden] { display: none !important; }

@media (max-width: 600px) {
  .topbar { padding: 13px 16px; }
  nav { gap: 12px; }
  nav a { font-size: 12px; }
  main { padding: 20px 13px; }
  .hero { padding-top: 35px; }
  .card { padding: 15px; }
  .banner { height: 115px; }
  .profilehead { margin-left: 5px; gap: 12px; }
  .avatar { width: 72px; height: 72px; }
  .identity h2 { font-size: 20px; }
  .stats { gap: 20px; }
  .bottom-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
