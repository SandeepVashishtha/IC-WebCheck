function performOSINT() {
    const urlInput = document.getElementById('urlInput').value;
    const resultsDiv = document.getElementById('results');

    // You need to replace 'YOUR_BACKEND_ENDPOINT' with the actual backend API endpoint
    const backendEndpoint = 'YOUR_BACKEND_ENDPOINT';

    // Make sure the URL input is not empty
    if (!urlInput.trim()) {
        alert('Please enter a valid URL');
        return;
    }
    // Send a POST request to the backend with the URL
    fetch(backendEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlInput }),
    })
    .then(response => response.json())
    .then(data => {
        // Display the results on the page
        resultsDiv.innerHTML = '';
        for (const key in data) {
            resultsDiv.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultsDiv.innerHTML = '<p>An error occurred. Please try again later.</p>';
    });
}
