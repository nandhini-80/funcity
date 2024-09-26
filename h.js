document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const game = document.getElementById("game").value;
    const tickets = document.getElementById("tickets").value;

    // Store the booking information in session storage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('game', game);
    sessionStorage.setItem('tickets', tickets);

    // Redirect to confirmation page
    window.location.href = "conformation.html";
});
