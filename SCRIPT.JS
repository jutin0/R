// Generar QR Code
document.getElementById('generate-qr').addEventListener('click', () => {
    const appUrl = document.getElementById('app-url').value;
    if (appUrl) {
        QRCode.toCanvas(document.getElementById('qr-canvas'), appUrl, (error) => {
            if (error) console.error(error);
            console.log('QR Code generado!');
        });
    } else {
        alert('Por favor, ingrese la URL de la APK');
    }
});

// Escanear QR Code
function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('qr-content').textContent = decodedText;
    window.location.href = decodedText;  // Redirige a la URL de descarga
    console.log(`Código QR escaneado: ${decodedText}`);
}

function onScanFailure(error) {
    console.warn(`Escaneo fallido: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
