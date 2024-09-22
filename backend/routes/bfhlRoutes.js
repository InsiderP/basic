const express = require('express');
const router = express.Router();
const { postBfhl, getBfhl } = require('../controllers/bfhlController');

router.post('/', postBfhl);
router.get('/', getBfhl);

module.exports = router;