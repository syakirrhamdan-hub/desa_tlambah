document.addEventListener('DOMContentLoaded', function () {

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'navbar-light');
            navbar.classList.remove('navbar-dark');
        } else {
            navbar.classList.remove('scrolled', 'navbar-light');
            navbar.classList.add('navbar-dark');
        }
    });

    // Close mobile menu on click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    // Smooth Scroll for Anchor Links (Optional, CSS scroll-behavior: smooth handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Handling (Mailto)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get values
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value; // Optional: user might want to include this in body
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;

            // recipient
            const recipient = 'karangpenangtlambah@gmail.com';
            
            // Construct body
            const emailBody = `Nama: ${name}\nEmail Pengirim: ${email}\n\nPesan:\n${message}`;

            // Construct mailto link
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

            // Info for user
            alert('Aplikasi email Anda akan terbuka untuk mengirim pesan ini. Silakan tekan tombol kirim (Send) di email Anda.');

            // Open email client
            window.location.href = mailtoLink;
            
            // Optional: reset form
            contactForm.reset();
        });
    }

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));



});
