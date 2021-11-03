const router = require("express").Router();
const path = require("path");
//const { User, Post, Comments } = require("../models");

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'stats.html'));
  });