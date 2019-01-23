const express = require('express');
const router = express.Router();

const vast = require("./api/vast")

router.use('/',vast);

module.exports = router;