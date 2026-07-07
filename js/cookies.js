/* ── Cookie Consent — Creative Yoga ── */
(function () {
  const KEY = 'cy_cookies';

  /* Load deferred iframes (Google Maps) after consent */
  function enableThirdParty() {
    document.querySelectorAll('[data-cookie-src]').forEach(el => {
      el.src = el.dataset.cookieSrc;
      el.removeAttribute('data-cookie-src');
      el.closest('.map-gate')?.classList.remove('map-placeholder');
    });
  }

  /* Global — called by "Pokaż mapę" button when consent was previously declined */
  window.CY_acceptCookies = function () {
    localStorage.setItem(KEY, '1');
    enableThirdParty();
    document.getElementById('cookie-banner')?.remove();
  };

  const stored = localStorage.getItem(KEY);

  if (stored === '1') {
    /* Already accepted — activate third-party after DOM ready */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enableThirdParty);
    } else {
      enableThirdParty();
    }
    return;
  }

  if (stored === '0') return; /* Previously declined — no banner */

  /* First visit — show banner after DOM ready */
  function showBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-label', 'Zgoda na pliki cookie');
    banner.innerHTML =
      '<div class="cookie-inner">' +
        '<div class="cookie-text">' +
          '<strong>Pliki cookie</strong>' +
          '<p>Używamy plików cookie do obsługi mapy Google i formularza kontaktowego. ' +
          '<a href="privacy.html">Polityka prywatności</a></p>' +
        '</div>' +
        '<div class="cookie-actions">' +
          '<button id="cookie-decline" class="cookie-btn cookie-btn--ghost">Odrzuć</button>' +
          '<button id="cookie-accept" class="cookie-btn cookie-btn--primary">Akceptuję</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);
    requestAnimationFrame(() => requestAnimationFrame(() =>
      banner.classList.add('cookie-show')
    ));

    function dismiss() {
      banner.classList.remove('cookie-show');
      banner.classList.add('cookie-hide');
      setTimeout(() => banner.remove(), 450);
    }

    document.getElementById('cookie-accept').addEventListener('click', () => {
      localStorage.setItem(KEY, '1');
      dismiss();
      enableThirdParty();
    });

    document.getElementById('cookie-decline').addEventListener('click', () => {
      localStorage.setItem(KEY, '0');
      dismiss();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
}());
