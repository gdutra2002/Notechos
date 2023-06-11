const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
router.get('/api/notes', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
router.post('/api/notes', (req, res) => {
  console.log(req.body);

  const { title, note } = req.body;

  if (req.body) {
    const newNote = {
      title,
      note,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});


module.exports = router;
