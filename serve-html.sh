#!/bin/bash

# A simple shell script to serve an HTML file using Python's built-in HTTP server

# Configuration
HTML_FILE="index.html"
PORT=8000

# Check if the HTML file exists
if [[ ! -f "$HTML_FILE" ]]; then
    echo "Error: $HTML_FILE not found!"
    exit 1
fi

# Start the Python HTTP server
echo "Serving $HTML_FILE on http://localhost:$PORT"
python3 -m http.server "$PORT"