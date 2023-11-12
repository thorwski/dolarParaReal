document.getElementById("inputReal").oninput = function () {
    let real = document.getElementById("inputReal").value;
    real = Number(real);

    let dolar = real / 4.90;

    // Defina o valor do inputDolar com o resultado
    document.getElementById("inputDolar").value = dolar.toFixed(2);

}

// Defina o valor do inputDolar com o resultado

document.getElementById("inputDolar").oninput = function () {
    let dolar = document.getElementById("inputDolar").value;
    dolar = Number(dolar);



    let real = dolar * 4.90;

    // Defina o valor do inputDolar com o resultado
    document.getElementById("inputReal").value = real.toFixed(2);


}