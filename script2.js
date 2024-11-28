document.addEventListener('DOMContentLoaded', () => {
    // Highlight Active Link
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            link.style.color = '#ffdd57';
        }
    });
});
