const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json()); // for parsing application/json

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error creating account');
        } else {
            res.status(200).send('Account created');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});