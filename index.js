document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const text = 'Greeeration';
    const coloredText = 'Gree<span class="green-text">eration</span>';
    let index = 0;
    let isAdding = true;
    const typingSpeed = 100; // Tốc độ gõ nhanh hơn
    const pauseTime = 2000;

    function type() {
        if (isAdding) {
            if (index < text.length) {
                let currentText = text.substring(0, index + 1);
                if (currentText.includes('Gree')) {
                    textElement.innerHTML = 'Gree' + text.substring(4, index + 1);
                    textElement.innerHTML = textElement.innerHTML.replace('Gree', '<span class="green-text">Gree</span>');
                } else {
                    textElement.innerHTML = currentText;
                }
                index++;
                setTimeout(type, typingSpeed);
            } else {
                isAdding = false;
                setTimeout(type, pauseTime);
            }
        } else {
            if (index > 0) {
                let currentText = text.substring(0, index - 1);
                if (currentText.includes('Gree')) {
                    textElement.innerHTML = 'Gree' + text.substring(4, index - 1);
                    textElement.innerHTML = textElement.innerHTML.replace('Gree', '<span class="green-text">Gree</span>');
                } else {
                    textElement.innerHTML = currentText;
                }
                index--;
                setTimeout(type, typingSpeed);
            } else {
                isAdding = true;
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});
