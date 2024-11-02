// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Gather form values
        const name = document.getElementById("name").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const state = document.getElementById("state").value.trim();
        const zip = document.getElementById("zip").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Basic validation
        if (!name || !address || !city || !state || !zip || !phone) {
            alert("Please fill out all fields.");
            return;
        }

        // Redirect to the ordered successfully page
        window.location.href = "ordered_successfully.html"; // Change to your actual page name
    });
});
