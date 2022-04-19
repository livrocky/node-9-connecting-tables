const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./api/usersRoutes');
const booksRoutes = require('./api/booksRoutes');
const authorRoutes = require('./api/authorRoutes');
const { PORT } = require('./config');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json('OK'));

// Routes
app.use('/api', userRoutes);
app.use('/api', booksRoutes);
app.use('/api', authorRoutes);

app.listen(PORT, () => console.log('server online, PORT', PORT));
