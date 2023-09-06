import {dataStudents} from './data.js';

let tabela = document.querySelector(".tabela")

dataStudents.forEach(currentItem => {
    let item = document.querySelector(".linha").cloneNode(true);
    item.querySelector(".nome .display-3").textContent = `${currentItem.nome}`;
    item.querySelectorAll(".nota .display-3").forEach((el, i) => {
        el.textContent = currentItem.notas[i]
    });
    item.querySelector(".media .display-3").textContent = `${currentItem.media().toFixed(2)}`;

    item.classList.remove("d-none");
    item.classList.add("d-flex");
    tabela.append(item)
});