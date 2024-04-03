function encryptMessage(dato, llave) {
    const message = dato;
    const key = llave;

    const encrypted = CryptoJS.AES.encrypt(message, key).toString();

    return encrypted;
}

function decryptMessage(dato, llave) {
    const encryptedMessage = dato;
    const key = llave;

    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

    return decrypted;
}