const express = require('express');
const { exec, execSync } = require('child_process');
const cors = require('cors');
const app = express();
const port = 3001; // Node.js server port

let jsonServerProcess = null;

// Enable CORS for all routes
app.use(cors());

// Function to kill any process running on port 3000
function killPort(port) {
  try {
    if (process.platform === 'win32') {
      // Windows command to find and kill the process on the port
      execSync(`for /f "tokens=5" %a in ('netstat -aon ^| find ":${port}" ^| find "LISTENING"') do taskkill /f /pid %a`);
    } else {
      // Unix-based systems command to kill the process
      execSync(`kill $(lsof -t -i:${port})`);
    }
    console.log(`Successfully killed process on port ${port}`);
  } catch (error) {
    console.error(`No process found on port ${port} or error killing the process`);
  }
}

// Start json-server
function startJsonServer() {
  if (jsonServerProcess) {
    jsonServerProcess.kill(); // Kill the current process if running
  }

  // Kill any process running on port 3000
  killPort(3000);

  jsonServerProcess = exec('json-server --watch ../db.json --port 3000', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restarting json-server: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
  });
}

// Endpoint to restart json-server
app.post('/restart-json-server', (req, res) => {
  startJsonServer();
  res.send({ message: 'json-server restarted' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Node.js server listening at http://localhost:${port}`);
  startJsonServer(); // Start json-server when the Node.js server starts
});
