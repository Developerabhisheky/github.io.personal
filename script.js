 // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Simple form submission handler with alert
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation (HTML required will handle most)
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });

    // Animate hero text fade in on page load
    window.addEventListener('load', () => {
      const heroH1 = document.querySelector('.hero h1');
      const heroP = document.querySelector('.hero p');
      const heroBtn = document.querySelector('.hero a.btn');

      heroH1.style.opacity = 1;
      heroH1.style.transform = 'translateY(0)';

      heroP.style.opacity = 1;
      heroP.style.transform = 'translateY(0)';

      heroBtn.style.opacity = 1;
      heroBtn.style.transform = 'translateY(0)';
    });