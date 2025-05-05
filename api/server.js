const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`PostgreSQL time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur lors de la requête à la base de données');
  }
});

app.listen(port, () => {
  console.log(`API Node.js démarrée sur le port ${port}`);
});
