const express = require('express');
const pool = require('../helpers/db');
const router = express.Router();

router.get('/:id', async function (req, res) {
  try {
    const sqlQuery =
      'SELECT id, email, password, created_at FROM user WHERE id=?';
    const rows = await pool.query(sqlQuery, req.params.id);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }

  res.status(200).json({ id: req.params.id });
});

router.post('/register', async function (req, res) {
  try {
    const { email, password } = req.body;

    const sqlQuery = 'INSERT INTO user (email, password) VALUES (?,?)';
    const result = await pool.query(sqlQuery, [email, password]);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
