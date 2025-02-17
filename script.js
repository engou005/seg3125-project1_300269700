document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("confirmation.html")) {
        displayConfirmation();
    } else {
        setupForm();
    }
});


function setupForm() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        // Get form values
        const formData = {
            tel: document.getElementById("tel").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
            name: document.getElementById("name").value,
            pet: document.getElementById("pet").value,
            size: document.getElementById("size").value,
            services: document.getElementById("services").value,
            notes: document.getElementById("notes").value,
        };

        
        localStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "confirmation.html";
    });
}

// Function to display confirmation details
function displayConfirmation() {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
        document.getElementById("confirm-tel").textContent = formData.tel;
        document.getElementById("confirm-date").textContent = formData.date;
        document.getElementById("confirm-time").textContent = formData.time;
        document.getElementById("confirm-name").textContent = formData.name;
        document.getElementById("confirm-pet").textContent = formData.pet;
        document.getElementById("confirm-size").textContent = formData.size;
        document.getElementById("confirm-services").textContent = formData.services;
        document.getElementById("confirm-notes").textContent = formData.notes || "None";
    } else {
        document.body.innerHTML = "<h2>No booking data found. Please fill out the form first.</h2>";
    }
}
