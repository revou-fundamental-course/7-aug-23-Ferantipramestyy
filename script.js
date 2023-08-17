function hitungLuas() {
    const alas = parseFloat(document.getElementById("inputAlas").value);
    const tinggi = parseFloat(document.getElementById("inputTinggi").value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById("hasilluas").textContent = `Luas segitiga: ${luas}`;
}

function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById("inputSisi1").value);
    const sisi2 = parseFloat(document.getElementById("inputSisi2").value);
    const sisi3 = parseFloat(document.getElementById("inputSisi3").value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasilkeliling").textContent = `Keliling segitiga: ${keliling}`;
}

function resetInputs() {
    inputSisi1.value = "";
    inputSisi2.value = "";
    inputSisi3.value = "";
    inputAlas.value = "";
    inputTinggi.value = "";
    hasilluas.textContent = "";
    hasilkeliling.textContent = "";
  }