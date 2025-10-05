// Brutalist JavaScript for Celsius website with scroll reveals
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    initCountdownTimer();
    
    // Initialize scroll reveals
    initScrollReveals();
    
    // Initialize video optimizations
    initVideoOptimizations();
    
    // Initialize mobile optimizations
    initMobileOptimizations();
    
    // Initialize navigation
    updateActiveNav();
});

// Countdown timer to October 10, 2025 at 23:00
function initCountdownTimer() {
    const countdownElement = document.getElementById('countdown-timer');
    if (!countdownElement) return;
    
    // Target date: October 10, 2025 at 23:00
    const targetDate = new Date('2025-10-10T23:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            countdownElement.innerHTML = 'EVENT STARTED';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll-based reveals with GSAP - DISABLED
function initScrollReveals() {
    // All animations disabled for better performance and visibility
    console.log('Scroll reveals disabled');
}

// Video optimizations
function initVideoOptimizations() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Ensure videos are muted and autoplay
        video.muted = true;
        video.playsInline = true;
        
        // Debug video dimensions
        console.log('Video element:', video);
        console.log('Video dimensions:', {
            width: video.videoWidth,
            height: video.videoHeight,
            clientWidth: video.clientWidth,
            clientHeight: video.clientHeight
        });
        
        // Handle video loading
        video.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully:', video.src);
            console.log('Video dimensions after load:', {
                width: video.videoWidth,
                height: video.videoHeight,
                clientWidth: video.clientWidth,
                clientHeight: video.clientHeight
            });
        });
        
        // Handle video errors
        video.addEventListener('error', (e) => {
            console.error('Video failed to load:', video.src, e);
        });
        
        // Force video to play
        video.play().catch(e => {
            console.error('Video play failed:', e);
        });
    });
}

// Mobile optimizations
function initMobileOptimizations() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Optimize video playback for mobile
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        if (window.innerWidth < 768) {
            video.muted = true;
            video.playsInline = true;
        }
    });
}

// Navigation active state
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('text-gray-300');
        } else {
            link.classList.remove('text-gray-300');
        }
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    initMobileOptimizations();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect - DISABLED
function initParallax() {
    // Parallax disabled for better performance
    console.log('Parallax disabled');
}