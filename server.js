const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve the static HTML page for the chatbot
app.use(express.static('public'));

// API route to handle chatbot requests
app.post('/ask', (req, res) => {
  const question = req.body.query;

  // Validate if the question exists
  if (!question) {
    console.log('Error: No question provided');
    return res.status(400).send({ message: 'No question provided.' });
  }

  console.log('Received question:', question);

  // Run the Python script with the user's question as an argument
  const pythonProcess = spawn('python3', [path.join(__dirname, 'answer_bot.py'), question]);

  pythonProcess.stdout.on('data', (data) => {
    console.log('Python stdout:', data.toString()); // Log output from Python script
    const response = data.toString();
    res.send({ answer: response });
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error('stderr:', data.toString()); // Log error from Python script
    res.status(500).send({ error: 'Error occurred in Python script' });
  });

  pythonProcess.on('close', (code) => {
    console.log('Python process exited with code', code);
    if (code !== 0) {
      res.status(500).send({ error: `Python script exited with code ${code}` });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
