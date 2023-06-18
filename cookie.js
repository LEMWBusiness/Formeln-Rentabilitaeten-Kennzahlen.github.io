(function () {
  // Head-Bereich
  var head = document.getElementsByTagName('head')[0];

  // Google Analytics-Skript
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-EMD0NM6GL4';
  head.appendChild(gaScript);

  // Funktionen für die Cookie-Verarbeitung
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  function enableGoogleAnalytics() {
  if (document.getElementById('cookiePopup').style.display === 'block') {
    gtag('config', 'G-EMD0NM6GL4');
    document.getElementById('cookiePopup').style.display = 'none';
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 2);
    document.cookie = 'cookieConsent=accepted; expires=' + expirationDate.toUTCString() + '; path=/';
  }
}

  function hideCookiePopup() {
    document.getElementById('cookiePopup').style.display = 'none';
  }

  function checkCookieConsent() {
    if (document.cookie.indexOf('cookieConsent=accepted') > -1) {
      hideCookiePopup();
    } else {
      document.getElementById('cookiePopup').style.display = 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    checkCookieConsent();

    var acceptButton = document.querySelector('.button1');
    acceptButton.addEventListener('click', enableGoogleAnalytics);

    var rejectButton = document.querySelector('.button2');
    rejectButton.addEventListener('click', hideCookiePopup);
  });
})();

