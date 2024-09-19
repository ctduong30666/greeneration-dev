document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".typing-text");
  const text = "Greeneration";
  const coloredText = 'Gree<span class="green-text">eration</span>';
  let index = 0;
  let isAdding = true;
  const typingSpeed = 100; // Tốc độ gõ nhanh hơn
  const pauseTime = 2000;

  function type() {
    if (isAdding) {
      if (index < text.length) {
        let currentText = text.substring(0, index + 1);
        if (currentText.includes("Gree")) {
          textElement.innerHTML = "Gree" + text.substring(4, index + 1);
          textElement.innerHTML = textElement.innerHTML.replace(
            "Green",
            '<span class="green-text">Green</span>'
          );
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
        if (currentText.includes("Gree")) {
          textElement.innerHTML = "Gree" + text.substring(4, index - 1);
          textElement.innerHTML = textElement.innerHTML.replace(
            "Green",
            '<span class="green-text">Green</span>'
          );
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

  // Thêm đoạn mã này để chuyển hướng sau 2 giây
  setTimeout(function () {
    window.location.href = "http://localhost/sft-website/";
  }, 2000);

  type();
});
