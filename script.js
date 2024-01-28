
const dadosCustas = [[0, 50.0, 64.30, 77.80, 113.31], /* ... rest of the data ... */];

function calcularCustas() {
    var valorDivida = parseFloat(document.getElementById("valorDivida").value);
    var resultado = "";

    for (var i = 0; i < dadosCustas.length; i++) {
        if (valorDivida >= dadosCustas[i][0] && valorDivida <= dadosCustas[i][1]) {
            resultado = "<table border='1'><tr><th>Pagamento em cartório</th><th>Desistir do protesto</th><th>Cancelar após o protesto</th></tr>" +
                        "<tr><td>" + dadosCustas[i][2] + "</td><td>" + dadosCustas[i][3] + "</td><td>" + dadosCustas[i][4] + "</td></tr></table>";
            break;
        }
    }

    if (resultado === "") {
        resultado = "Valor fora das faixas da tabela.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

document.getElementById("calculateButton").addEventListener("click", calcularCustas);
