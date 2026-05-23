/* ── Scroll-aware navbar ── */
const header = document.getElementById('main-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hamburger / mobile nav ── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ── Scroll reveal (Intersection Observer) ── */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach(el => observer.observe(el));
}

/* ── Contact form — EmailJS ──────────────────────────────────────────────
 *
 *  Aby aktywować wysyłanie e-maili:
 *  1. Zarejestruj się na https://www.emailjs.com  (darmowe do 200 maili/mies.)
 *  2. Dodaj usługę e-mail (Gmail / Outlook / inną) → zanotuj SERVICE_ID
 *  3. Stwórz szablon wiadomości → zanotuj TEMPLATE_ID
 *     W szablonie możesz użyć zmiennych: {{from_name}}, {{reply_to}},
 *     {{subject}}, {{message}}
 *  4. Skopiuj swój Public Key z zakładki Account
 *  5. Uzupełnij trzy wartości poniżej i usuń komentarz
 *
 * ─────────────────────────────────────────────────────────────────────── */

const EMAILJS_PUBLIC_KEY  = 'TWOJ_PUBLIC_KEY';   // np. 'aBcDeFgHiJkLmNoP'
const EMAILJS_SERVICE_ID  = 'TWOJ_SERVICE_ID';   // np. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'TWOJ_TEMPLATE_ID';  // np. 'template_xyz789'

const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');
const formSubmit  = document.getElementById('form-submit');

if (contactForm) {
  /* Initialize EmailJS only when the SDK is loaded */
  const initEmailJS = () => {
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'TWOJ_PUBLIC_KEY') {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      return true;
    }
    return false;
  };

  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    /* If EmailJS not configured — show helpful message */
    if (!initEmailJS()) {
      showStatus(
        'Formularz nie jest jeszcze skonfigurowany. ' +
        'Skontaktuj się bezpośrednio: przyklad@email.com',
        'error'
      );
      return;
    }

    const originalLabel = formSubmit.textContent;
    formSubmit.disabled   = true;
    formSubmit.textContent = 'Wysyłanie…';
    clearStatus();

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm);
      contactForm.reset();
      showStatus('Wiadomość wysłana! Odezwę się wkrótce 🌿', 'success');
      formSubmit.textContent = '✓ Wysłano';
      setTimeout(() => {
        formSubmit.textContent = originalLabel;
        formSubmit.disabled   = false;
        clearStatus();
      }, 4000);
    } catch {
      showStatus('Coś poszło nie tak — spróbuj ponownie lub napisz bezpośrednio.', 'error');
      formSubmit.textContent = originalLabel;
      formSubmit.disabled   = false;
    }
  });

  function showStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className   = 'form-status ' + type;
  }

  function clearStatus() {
    if (!formStatus) return;
    formStatus.textContent = '';
    formStatus.className   = 'form-status';
  }
}
