/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 查询
router.get('/heros',service.getAllHeros);
// 删除
router.delete('/heros/:id',service.deleteHero);

module.exports = router;