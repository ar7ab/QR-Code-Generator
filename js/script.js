const imgBox = document.getElementById("qrcode-box");
const qrImg = document.getElementById("qr-img");
const qrText = document.getElementById("qr-text");
const qrBtn = document.getElementById("qr-gen-btn");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
    } else {
        imgBox.classList.add("error");
        setTimeout(() => {
            imgBox.classList.remove("error");
        }, 1000);
    }
}

qrBtn.onclick = function () {
    generateQR();
}