const TELEGRAM_BOT_TOKEN = "7540286268:AAF4I-9RTxqqNWJn8qkGLXbJtL6DOMd9LJA"; // Ganti dengan token bot Anda
const TELEGRAM_CHAT_ID = "7013450923"; // Ganti dengan ID chat Telegram Anda

function sendCodeToTelegram(newCode) {
    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    fetch(telegramURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: `Kode login baru: ${newCode}`
        })
    })
    .then(response => response.json()) // Mengubah respons menjadi JSON
    .then(data => {
        if (data.ok) {
            alert('Kode baru telah dikirim melalui Telegram.');
        } else {
            alert('Gagal mengirim kode melalui Telegram. Cek konfigurasi token dan chat ID.');
            console.error(data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim kode.');
    });
}

function generateNewCode() {
    const adminCode = document.getElementById('adminCode').value;
    if (adminCode === 'ADMIN123') {
        const newCode = Math.random().toString(36).substring(2, 10).toUpperCase();
        alert(`Kode baru berhasil dibuat: ${newCode}`);
        sendCodeToTelegram(newCode); // Kirim ke Telegram
    } else {
        alert('Kode admin salah.');
    }
}
