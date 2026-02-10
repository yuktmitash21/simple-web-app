#!/bin/bash

# This script serves the HTML file using Python's built-in HTTP server

# Define the default port
PORT=8000

# Check if a port argument was provided
if [ "$#" -eq 1 ]; then
  PORT=$1
fi

# Navigate to the directory containing index.html
cd "$(dirname "$0")"

# Start the HTTP server
echo "Serving index.html on http://localhost:$PORT"
python3 -m http.server "$PORT"