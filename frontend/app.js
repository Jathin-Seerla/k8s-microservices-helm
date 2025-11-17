const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://backend:5000';

app.get('/', async (req, res) => {
  try {
    const r = await fetch(`${BACKEND_URL}/api/hello`);
    const data = await r.json();
    res.send(`<h1>Frontend</h1><p>Message from backend: <strong>${data.message}</strong></p>`);
  } catch (e) {
    res.send(`<h1>Frontend</h1><p>Backend unreachable: ${e.message}</p>`);
  }
});

app.listen(PORT, () => console.log(`Frontend listening on ${PORT}`));
