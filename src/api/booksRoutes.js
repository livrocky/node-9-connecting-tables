const express = require('express');
const { dbClient } = require('../config');

const booksRoutes = express.Router();

// routes
// POST /api/book/ - sukursim nauja knyga
// eslint-disable-next-line consistent-return
booksRoutes.post('/book', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    // paimti gautus duomenis
    console.log('req.body===', req.body);
    const newBookObj = req.body;
    // su jais sukurti nauja knyga
    const collection = dbClient.db('library').collection('books');
    const insertResult = await collection.insertOne(newBookObj);
    res.json(insertResult);
  } catch (error) {
    console.error('error in creating a book', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

booksRoutes.get('/api/book', async (req, res) => {
  try {
    await dbClient.connect();
    const dbRes = await dbClient.db('library').collection('books').find().toArray();
    res.json(dbRes);
  } catch (error) {
    console.error('error in get books', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

module.exports = booksRoutes;
