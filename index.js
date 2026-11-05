require('dotenv').config();
const express = require('express')
const { initDatabase } = require('./service/db');
const app = express()                       
const port = process.env.PORT || 3000; 
const addRoutes = require('./route'); // automatikusan index.js-ből keresi

app.use(express.json());    
addRoutes(app);








initDatabase((err, result) => {
    if (err) {
        return console.error(err);
    }
    const { db, bookModel } = result;

    addRoutes(app, db, bookModel);

    app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();  
    }
    res.status(404).json({
        error: 'Not found',
        method: req.method,
        path: req.originalUrl
    });
});

    app.listen(port, function () { 
    console.log(`Server running on http://localhost:${port}`); // Konzolra kiír egy üzenetet, hogy a szerver fut és melyik porton érhető el.
});
});