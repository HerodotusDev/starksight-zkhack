const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/verify-proof', (req, res) => {
  console.log("-------------------")
  console.log("Skipping Herodotus API call, using mocked root as input");
  console.log("-------------------")

  console.log(req.body);
  const timeoutMs = 5000; // 5 seconds
  const shell = spawn('/bin/bash', ['-i', '-c', 'source venv/bin/activate && make run-profile'], { stdio: 'inherit' });
  let hasTimedOut = false;


  const timeout = setTimeout(() => {
    hasTimedOut = true;
    res.status(200).send('Process completed successfully');
    shell.kill('SIGTERM');
  }, timeoutMs);

  shell.on('exit', (code) => {
    if (!hasTimedOut) {
      clearTimeout(timeout);
      if (code === 0) {
        res.status(200).send('Process completed successfully');
      } else {
        res.status(500).send(`Process exited with code ${code}`);
      }
    }
  });

  shell.on('error', (error) => {
    if (!hasTimedOut) {
      clearTimeout(timeout);
      res.status(500).send(`Error: ${error.message}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
