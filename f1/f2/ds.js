        function getChatIdFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id');
        }
        const chatIdInput = document.getElementById('chatid');
        const extractedChatId = getChatIdFromURL();
        chatIdInput.value = extractedChatId;
