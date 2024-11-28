document.addEventListener('DOMContentLoaded', () => {
    // Highlight Active Link in Navigation
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            link.style.color = '#ffdd57';
        }
    });

    // Scroll-to-Top Button
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
    scrollButton.style.transition = 'opacity 0.3s, transform 0.3s';
    document.body.appendChild(scrollButton);

    // Show/Hide Scroll Button on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 200) scrollButton.style.display = 'none';
            }, 300);
        }
    });

    // Smooth Scroll to Top
    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in Effect for Sections on Scroll
    const sections = document.querySelectorAll('.container');
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Your existing JavaScript code

    const imageContainer = document.getElementById('imageContainer');
    const clickedImage = document.getElementById('clickedImage');
    const imageLinks = document.querySelectorAll('.image-link');
    const overlay = document.getElementById('overlay');

    // Add click event listener to image links
    imageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const imageUrl = event.target.href;
            clickedImage.src = imageUrl;
            imageContainer.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Hide image and overlay when clicking outside of the image container
    document.addEventListener('click', (event) => {
        if (!imageContainer.contains(event.target) && !event.target.classList.contains('image-link')) {
            imageContainer.style.display = 'none';
            overlay.style.display = 'none';
        }
    });

    // Prevent hiding image and overlay when clicking on the image itself
    imageContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});