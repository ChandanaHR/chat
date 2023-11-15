function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    if (message.trim() !== '') {
        var chatMessages = document.getElementById('chatMessages');
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}