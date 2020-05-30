const express = require('express');
const controller = require('controllers/json2mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  controller.save2db();
  res.send('Saved into DB');
});

module.exports = router;
