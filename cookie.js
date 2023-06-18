(function () {
  // Head-Bereich
  var head = document.getElementsByTagName('head')[0];

  // Google Analytics-Skript
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-EMD0NM6GL4';
  head.appendChild(gaScript);

  // Funktionen für die Cookie-Verarbeitung
  function enableGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-EMD0NM6GL4');
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 2);
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookiePopup();
  }

  function hideCookiePopup() {
    document.getElementById('cookiePopup').style.display = 'none';
  }

  function showCookiePopup() {
    document.getElementById('cookiePopup').style.display = 'block';
  }

 function checkCookieConsent() {
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    hideCookiePopup();
  } else {
    showCookiePopup();
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

window.addEventListener('load', function () {
  var cookiePopup = document.getElementById('cookiePopup');
  cookiePopup.style.display = 'block';
});



