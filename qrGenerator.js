import QRCode from 'qrcode';

export async function generateQR() {
    const krisplusURL = 'krispay://payment_deeplink?pos_id=t1&callback=https%3A%2F%2Fwww.myonlinestore.com%2Fkp-payment-callback&payment_amt=34.99&currency=AUD&qr_timestamp=1722326071&payment_ref=txn3216352';
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(krisplusURL);
        return qrCodeDataUrl;
    } catch (error) {
        console.error("Failed to generate QR code", error);
    }
}