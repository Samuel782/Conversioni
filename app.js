function convertToDecimal() {
    const binary = document.getElementById("binaryInput").value;
    if (binary === "" || !/^[01]+$/.test(binary)) {
        alert("Per favore, inserisci un numero binario valido (composto solo da 0 e 1).");
        return;
    }
    const decimal = parseInt(binary, 2).toString(10);
    document.getElementById("decimalOutput").textContent = `Decimale: ${decimal}`;
}

function convertToBinary() {
    const decimal = document.getElementById("decimalInput").value;
    if (decimal === "" || isNaN(decimal) || parseInt(decimal) < 0) {
        alert("Per favore, inserisci un numero decimale valido (positivo).");
        return;
    }

    let numeroDecimale = parseInt(decimal);
    let numeroBinario = "";

    if (numeroDecimale === 0) {
        numeroBinario = "0";
    } else {
        while (numeroDecimale > 0) {
            let resto = numeroDecimale % 2;
            numeroBinario = resto + numeroBinario;
            numeroDecimale = Math.floor(numeroDecimale / 2);
        }
    }

    document.getElementById("binaryOutput").textContent = `Binario: ${numeroBinario}`;
}
