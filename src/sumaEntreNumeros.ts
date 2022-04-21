let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputNumero1 = <HTMLInputElement>document.getElementById("numero1");
let inputNumero2 = <HTMLInputElement>document.getElementById("numero2");
let sumaEntreNumeros = <HTMLElement>document.getElementById("sumaEntreNumeros");

btnEnviar.addEventListener("click", () => {
  let cotaInferior = Number(inputNumero1.value);
  let cotaSuperior = Number(inputNumero2.value);
  let suma: number = 0;
  if (cotaInferior < cotaSuperior) {
    for (let i = cotaInferior; i <= cotaSuperior; i++) {
      suma = suma + i;
    }
    console.log(suma);
    sumaEntreNumeros.innerHTML = `la suma entre ${cotaInferior} y ${cotaSuperior} es ${suma}`;
  } else {
    console.log("Ingresar nuevamente Numero 2");
    sumaEntreNumeros.innerHTML = "Ingresar nuevamente Numero 2";
  }
});
