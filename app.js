// app.js

document.addEventListener("DOMContentLoaded", function () {
    const messageList = document.getElementById("message-list");
    const messageInput = document.getElementById("message-input");

    function displayMessage(message) {
        const li = document.createElement("li");
        li.textContent = message;
        messageList.appendChild(li);
        messageInput.value = "";
    }

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== "") {
            displayMessage(message);
        }
    }

    // You can add more functionality here, like connecting to a backend server for real-time communication.

    window.sendMessage = sendMessage;
});
