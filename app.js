const qrCode = new QRCodeStyling({
    width: 1200,
    height: 1200,
    type: "canvas",
    image: "./images/branding.svg",
    dotsOptions: {
        color: "#EB514E",
        type: "rounded"
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
        let defaultSize = 1200;
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
        let fileName = document.getElementById("file-name-user-input").value
        console.log(fileName.value)
        if(fileName !== undefined && typeof fileName === 'string' && fileName.trim().length > 0)
            fileName = fileName.trim();
        else
            fileName = "nimblewaysQRCode";

        qrCode.download({ name: fileName, extension: "png" });
    }
})

function handleCredentialResponse(googleUser) {
    console.log({googleUser});
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }