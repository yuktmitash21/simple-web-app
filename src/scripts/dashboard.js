function submitWasteLog() {
    const fileInput = document.getElementById('waste-photo');
    if (fileInput.files.length === 0) {
        alert('Please select a photo to upload.');
        return;
    }
    const file = fileInput.files[0];
    // Simulate API call for AI estimation
    setTimeout(() => {
        const estimationResult = 'Estimated fill level: 70%, Contamination: plastic detected';
        document.getElementById('estimation-result').innerText = estimationResult;
    }, 2000);
}

function logPickup() {
    const currentDateTime = new Date().toLocaleString();
    const logEntry = `Pickup logged at ${currentDateTime}. Dumpster was 80% full.`;
    document.getElementById('pickup-log').innerText = logEntry;
    alert('Pickup logged successfully.');
}