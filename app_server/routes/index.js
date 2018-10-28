var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/mekanlar');
var ctrlDigerleri=require('../controllers/digerleri');

router.get('/',ctrlMain.anaSayfa);
router.get('/mekan',ctrlMain.mekanBilgisi);
router.get('/mekan/yorum/yeni',ctrlMain.yorumEkle);
router.get('/hakkinda',ctrlDigerleri.hakkinda);
module.exports = router;
