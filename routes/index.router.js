const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/index.html');
})

module.exports = router;