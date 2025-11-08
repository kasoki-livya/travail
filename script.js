document.addEventListener('DOMContentLoaded', function () {
    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
    // Mobile nav toggle
    const nav = document.getElementById('nav');
    const btnNav = document.getElementById('btn-nav-toggle');
    btnNav && btnNav.addEventListener('click', () => {
      if (!nav) return;
      const expanded = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', (!expanded).toString());
      nav.style.display = expanded ? 'none' : 'flex';
      btnNav.setAttribute('aria-expanded', (!expanded).toString());
    });
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close nav on mobile
          if (nav && window.innerWidth <= 900) {
            nav.style.display = 'none';
            nav.setAttribute('data-open', 'false');
            btnNav && btnNav.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  
    // Simple contact form handling (client-side)
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (!name || !email || !message) {
          status.textContent = 'Veuillez remplir tous les champs.';
          return;
        }
        // Here you would normally send the data to your server (fetch / XHR).
        // For demo, we just show a success message and reset.
        status.textContent = 'Message envoyé — merci !';
        form.reset();
        setTimeout(() => { status.textContent = ''; }, 4000);
      });
    }
  });
  