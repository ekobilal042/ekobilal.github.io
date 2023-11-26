const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle 404 - Not Found
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500 - Internal Server Error');
});

// Start the server
const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});
