function encryptMessage(dato, llave) {
    const encrypted = CryptoJS.AES.encrypt(dato, llave).toString();

    return encrypted;
}

function encryptArray(dato, llave) {
    var iv = CryptoJS.enc.Utf8.parse(llaves.iv);

    const encrypted = CryptoJS.AES.encrypt(dato, llave, { iv: iv }).toString();

    return encrypted;
}

function decryptMessage(dato, llave) {
    const decrypted = CryptoJS.AES.decrypt(dato, llave).toString(CryptoJS.enc.Utf8);

    return decrypted;
}