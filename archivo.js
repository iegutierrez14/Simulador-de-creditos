// Función para calcular el monto total a pagar
function calcularTotalPagar(montoCredito) {
  let tasaInteres;
  
  if (montoCredito <= 1000) {
    tasaInteres = 0.05; // 5% de interés
  } else {
    tasaInteres = 0.03; // 3% de interés
  }
  
  return montoCredito + (montoCredito * tasaInteres);
}

// Función para simular el crédito y mostrar los detalles de los pagos
function simularCredito() {
  let montoCredito = parseInt(prompt("Ingrese el monto de crédito deseado:"));
  let totalPagar = calcularTotalPagar(montoCredito);
  let plazo = parseInt(prompt("Ingrese la cantidad de meses para el pago:"));

  if (plazo > 0) {
    let pagoMensual = totalPagar / plazo;
    console.log("Pago mensual: " + pagoMensual);
    
    let pagosDetallados = [];
    
    for (let i = 1; i <= plazo; i++) {
      pagosDetallados.push({
        mes: i,
        pago: pagoMensual.toFixed(2)
      });
    }
    
    console.log("Detalles de pagos mensuales:");
    pagosDetallados.forEach((pago) => {
      console.log("Mes " + pago.mes + ": Pago de " + pago.pago);
    });

    // búsqueda y filtrado en el array de pagosDetallados
    let mesBuscado = 3;
    let pagoEncontrado = buscarPagoPorMes(pagosDetallados, mesBuscado);
    console.log("Pago del mes " + mesBuscado + ": " + pagoEncontrado.pago);

    let pagosMayoresA10 = filtrarPagosMayores(pagosDetallados, 10);
    console.log("Pagos mayores a 10: ");
    pagosMayoresA10.forEach((pago) => {
      console.log("Mes " + pago.mes + ": Pago de " + pago.pago);
    });
  } else {
    console.log("El plazo debe ser mayor a cero.");
  }
}

// Función para buscar un pago por mes en el array de pagosDetallados
function buscarPagoPorMes(pagosDetallados, mes) {
  return pagosDetallados.find((pago) => pago.mes === mes);
}

// Función para filtrar los pagos mayores a un valor específico
function filtrarPagosMayores(pagosDetallados, valor) {
  return pagosDetallados.filter((pago) => pago.pago > valor);
}

simularCredito();
