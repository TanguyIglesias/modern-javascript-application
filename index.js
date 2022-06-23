import { meteo } from "./meteo.js";
import { comparaison } from "./comparaison.js";

document.querySelector("#input-town").addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    meteo();
  }
});

document.querySelector("#button-town").addEventListener("click", meteo);

document.querySelector("#input-town2").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    comparaison();
  }
});

document.querySelector("#button-town2").addEventListener("click", comparaison);
