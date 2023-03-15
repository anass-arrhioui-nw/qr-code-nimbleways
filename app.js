const qrCode = new QRCodeStyling({
    width: 1000,
    height: 1000,
    type: "canvas",
    image: "https://raw.githubusercontent.com/anass-arrhioui-nw/styled-qr-code/main/images/branding.svg",
    dotsOptions: {
        color: "#EB514E",
        type: "extra-rounded"
    },
    backgroundOptions: {
        color: "#FFFFFF",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
    }
});

window.onload = () => {
    document.getElementById("link-form").addEventListener("submit", (e) => {
        e.preventDefault()
        let userInput = document.getElementById("user-input")
        let checkedSize = document.querySelector('input[name=sizeRadio]:checked');
        let defaultSize = 1000;
        if (checkedSize !== undefined) {
            defaultSize = +checkedSize.value
        }
        if (userInput !== undefined && userInput.value !== "") {
            qrCode.update({
                data: userInput.value,
                width: +defaultSize,
                height: +defaultSize,
            })
            qrCode._canvas._canvas.classList.add("qr-convas")
            qrCode.append(document.getElementById("canvas"));
        }

    })
}

document.getElementById("download-button").addEventListener("click", () => {
    if(qrCode !== undefined && qrCode._options.data != "") {
        qrCode.download({ name: "nimblewaysQRCode", extension: "png" });
    }
})