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


function convertToOctal() {
    const binary = document.getElementById("binaryInput").value.trim();
    if (binary === "" || !/^[01]+$/.test(binary)) {
        alert("Per favore, inserisci un numero binario valido.");
        return;
    }

    let binaryString = binary;
    let octalString = "";

    // Aggiungi zeri all'inizio se la lunghezza non è un multiplo di 3
    while (binaryString.length % 3 !== 0) {
        binaryString = "0" + binaryString;
    }

    // Dividi la stringa binaria in gruppi di 3 cifre
    for (let i = 0; i < binaryString.length; i += 3) {
        const binaryGroup = binaryString.substring(i, i + 3);
        const octalDigit = parseInt(binaryGroup, 2).toString(8);
        octalString += octalDigit;
    }

    document.getElementById("octalOutput").textContent = `Ottale: ${octalString}`;
}

function convertOCtToBinary() {
    const octal = document.getElementById("octalInput").value.trim();
    if (octal === "" || !/^[0-7]+$/.test(octal)) {
        alert("Per favore, inserisci un numero ottale valido (solo cifre da 0 a 7).");
        return;
    }

    let binaryString = "";

    // Converte ogni cifra ottale in un gruppo di tre cifre binarie
    for (let i = 0; i < octal.length; i++) {
        const octalDigit = parseInt(octal[i], 8);
        const binaryGroup = octalDigit.toString(2).padStart(3, '0');
        binaryString += binaryGroup;
    }

    // Rimuove eventuali zeri iniziali inutili
    binaryString = binaryString.replace(/^0+/, '');

    // Se il risultato è una stringa vuota, significa che l'input era "0"
    if (binaryString === "") {
        binaryString = "0";
    }

    document.getElementById("binaryOutput").textContent = `Binario: ${binaryString}`;
}