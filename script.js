document.getElementById('lookupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    // Simulated response for demonstration
    const mockResponse = {
        name: "John Doe",
        dob: "1985-08-15",
        address: "123 Main St, Springfield, USA"
    };
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <strong>Name:</strong> ${mockResponse.name}<br>
        <strong>Date of Birth:</strong> ${mockResponse.dob}<br>
        <strong>Address:</strong> ${mockResponse.address}
    `;
});
