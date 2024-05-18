function convertToDecimal() {
    const binary = document.getElementById("binaryInput").value;
    if (binary === "" || !/^[01]+$/.test(binary)) {
        alert("Per favore, inserisci un numero binario valido (composto solo da 0 e 1).");
        return;
    }
    const decimal = parseInt(binary, 2).toString(10);
    document.getElementById("decimalOutput").textContent = `Decimale: ${decimal}`;
}
