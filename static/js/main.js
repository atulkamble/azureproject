async function callAPI() {
    const nameInput = document.getElementById('nameInput');
    const responseDiv = document.getElementById('response');
    const name = nameInput.value || 'World';
    
    try {
        const response = await fetch(`/api/hello?name=${encodeURIComponent(name)}`);
        const data = await response.json();
        
        responseDiv.innerHTML = `
            <strong>Response:</strong><br>
            ${data.message}<br>
            <em>Status: ${data.status}</em>
        `;
        responseDiv.style.color = '#4CAF50';
    } catch (error) {
        responseDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
        responseDiv.style.color = '#f44336';
    }
}

// Allow Enter key to trigger API call
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                callAPI();
            }
        });
    }
});
