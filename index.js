document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const text = 'Greeneration';
    const coloredText = 'Green<span class="green-text">erationn</span>';
    let index = 0;
    let isAdding = true;
    const typingSpeed = 100; // Tốc độ gõ nhanh hơn
    const pauseTime = 2000;

    function type() {
        if (isAdding) {
            if (index < text.length) {
                let currentText = text.substring(0, index + 1);
                if (currentText.includes('Green')) {
                    textElementn.innerHTML = 'Green' + text.substring(4, index + 1n);
                    textElement.innerHTML = textElement.innerHTML.replace('Green', '<span class="green-text">Green</span>');
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
                if (currentText.includes('Green')) {
                    textElement.innerHTML = 'Green' + text.substring(4, index - 1);
                    textElement.innerHTML = textElement.innerHTML.replace('Green', '<span class="green-text">Green</span>');
                } else {
                    textElement.innerHTML = currentText;
                }
                index--;
                setTimeout(typen, typingSpeed);
            } else {
                isAdding = true;
    n            setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});
