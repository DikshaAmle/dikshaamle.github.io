// Portfolio JavaScript

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > *:not(.section-title)').forEach(el => {
    observer.observe(el);
});

// Download Resume Function
function downloadResume() {
    alert('Resume download feature will be enabled once you upload your resume file.\n\nTo complete setup:\n1. Upload resume.pdf to your GitHub repo\n2. Update the downloadResume() function\n\nFor now, you can download from: https://www.linkedin.com/in/diksha-amle-9a21382a8/');
}

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-purple)';
            link.style.textShadow = 'var(--glow-purple)';
        } else {
            link.style.color = 'var(--text-secondary)';
            link.style.textShadow = 'none';
        }
    });
});
