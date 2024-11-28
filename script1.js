// Highlight Active Link in Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.style.backgroundColor = '#99f2c8';
            link.style.color = '#333';
        }
    });
});

// Add Scroll-to-Top Button
const scrollButton = document.createElement('button');
scrollButton.textContent = '⬆';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.backgroundColor = '#1f4037';
scrollButton.style.color = 'white';
scrollButton.style.border = 'none';
scrollButton.style.padding = '10px 15px';
scrollButton.style.borderRadius = '50%';
scrollButton.style.fontSize = '1.5rem';
scrollButton.style.cursor = 'pointer';
scrollButton.style.display = 'none';
scrollButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
document.body.appendChild(scrollButton);

// Show/Hide Scroll Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to Top When Button Clicked
scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
