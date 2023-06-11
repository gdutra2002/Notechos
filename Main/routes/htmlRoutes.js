const router = require('express').Router();
const path = require('path');

const notesRouter = require('./apiRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

router.use((req, res) => {
  res.send("")
});

router.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

module.exports = router;