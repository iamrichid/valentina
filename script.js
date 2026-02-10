// Minimal interactions
const initialView = document.getElementById('initial-view');
const questionView = document.getElementById('question-view');
const successView = document.getElementById('success-view');

const openBtn = document.getElementById('open-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Canvas setup for confetti and interactions
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// --- Interactive Particles System ---
const particles = [];
const cursorTrail = [];

class Particle {
    constructor(x, y, type = 'confetti') {
        this.x = x;
        this.y = y;
        this.type = type; // 'confetti', 'heart', 'trail'
        this.size = Math.random() * 5 + 2;
        
        // Velocity
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        // Physics
        this.gravity = 0.05;
        this.friction = 0.98;
        this.opacity = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        
        // Color
        const colors = ['#C4203B', '#1A1A1A', '#E5E5E5', '#D94A5C'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        if (type === 'trail') {
            this.size = Math.random() * 3 + 1;
            this.decay = 0.05;
            this.gravity = 0;
            this.vx *= 0.2;
            this.vy *= 0.2;
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= this.friction;
        this.vy *= this.friction;
        
        if (this.type !== 'trail') {
            this.vy += this.gravity;
        }
        
        this.opacity -= this.decay;
        this.size -= 0.1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = this.color;
        
        if (this.type === 'heart' || this.type === 'trail') {
            // Simple heart shape approximation or circle for performance
           ctx.beginPath();
           const topCurveHeight = this.size * 0.3;
           ctx.moveTo(this.x, this.y + topCurveHeight);
           ctx.bezierCurveTo(this.x, this.y, this.x - this.size / 2, this.y, this.x - this.size / 2, this.y + topCurveHeight);
           ctx.bezierCurveTo(this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x, this.y + (this.size + topCurveHeight) / 2, this.x, this.y + this.size);
           ctx.bezierCurveTo(this.x, this.y + (this.size + topCurveHeight) / 2, this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x + this.size / 2, this.y + topCurveHeight);
           ctx.bezierCurveTo(this.x + this.size / 2, this.y, this.x, this.y, this.x, this.y + topCurveHeight);
           ctx.fill();
        } else {
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
        
        ctx.restore();
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Manage particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.opacity <= 0 || p.size <= 0) particles.splice(i, 1);
    }
    
    requestAnimationFrame(animate); 
}
animate();

// --- Event Listeners for Interactions ---

// Cursor Trail
let mouseTimer = null;
window.addEventListener('mousemove', (e) => {
    // Throttling creation for performance
    if (!mouseTimer) {
        mouseTimer = setTimeout(() => {
            particles.push(new Particle(e.clientX, e.clientY, 'trail'));
            mouseTimer = null;
        }, 20);
    }
});

// Click Bursts
window.addEventListener('click', (e) => {
    // Spawn a burst
    for (let i = 0; i < 8; i++) {
        particles.push(new Particle(e.clientX, e.clientY, 'heart'));
    }
});

function triggerConfetti() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(cx, cy, 'confetti'));
    }
}

// Interaction Logic
openBtn.addEventListener('click', () => {
    // Fade out initial
    initialView.classList.add('fade-exit-active');
    
    setTimeout(() => {
        initialView.classList.add('hidden');
        questionView.classList.remove('hidden');
        
        // Trigger reflow
        void questionView.offsetWidth;
        
        // Fade in question using anime.js for staggering if needed, or just CSS
        anime({
            targets: '#question-view',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeOutExpo'
        });
    }, 500);
});

const noTexts = [
    "No thanks", 
    "Are you sure?", 
    "Think again!", 
    "Really?", 
    "Last chance!", 
    "Have a heart!", 
    "Don't be cold!",
    "Wrong button!",
    "Try the other one!"
];

// "No" button evasion - cheeky logic
noBtn.addEventListener('mouseover', () => {
    const x = (Math.random() - 0.5) * 300; // Increased range
    const y = (Math.random() - 0.5) * 300;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    
    // Cycle text
    const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
    noBtn.innerText = randomText;
    
    // Spawn a confused particle burst
    const rect = noBtn.getBoundingClientRect();
    for(let i=0; i<3; i++) {
        particles.push(new Particle(rect.left + rect.width/2, rect.top + rect.height/2, 'confetti'));
    }
});

yesBtn.addEventListener('click', () => {
    // Confetti
    triggerConfetti();
    
    // Transition to Success
    questionView.classList.add('fade-exit-active');
    setTimeout(() => {
        questionView.classList.add('hidden');
        successView.classList.remove('hidden');
        anime({
            targets: '#success-view',
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1200,
            easing: 'easeOutExpo'
        });
    }, 500);
});


