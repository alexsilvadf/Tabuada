const btnCalcular = document.querySelector("button");
const numero = document.querySelector("#numero");
const multiplicador = document.querySelector("#multiplicador");
const resultadoForm = document.querySelector("#resultado");
const resultado = document.querySelector("#resultado-mult");


btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  resultadoForm.innerHTML = "";

  multiplicar(numero.value, multiplicador.value);
});

function multiplicar(numero, multiplicador) {
  console.log(numero, multiplicador);
  if (!numero) return;
  if (!multiplicador) return;

  for (let i = 1; i <= multiplicador; i++) {
    const result = numero * i;

    const template = `<div class="row">
                        <div class="operation">${numero} x ${i} = </div>
                        <div class="result">${result}</div>
                      </div>`;

    const parser = new DOMParser(template);

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    resultadoForm.appendChild(row);
  }
}
