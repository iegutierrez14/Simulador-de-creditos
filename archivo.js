function simularCredito() {
  // Obtenemos la cantidad del crédito que desea el usuario
  let montoCredito = parseInt(prompt("Ingrese el monto de crédito deseado:"));

  var tasaInteres;
  if (montoCredito <= 1000) {
    tasaInteres = 0.05; // 5% de interés  
  } else {
    tasaInteres = 0.03; // 3% de interés
  }

  var totalPagar = montoCredito + (montoCredito * tasaInteres);

  var plazo = parseInt(prompt("Ingrese la cantidad de meses para el pago:"));

  if (plazo > 0) {
    var pagoMensual = totalPagar / plazo;
    console.log("Pago mensual: " + pagoMensual);

    for (var i = 1; i <= plazo; i++) {
      console.log("Mes " + i + ": Pago de " + pagoMensual.toFixed(2));
    }
  } else {
    console.log("El plazo debe ser mayor a cero.");
  }
}

simularCredito();
