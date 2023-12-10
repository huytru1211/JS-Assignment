'use strict'
// const ul_list = document.createElement("ul");
const target = document.querySelector("#target");
let content = ''
for (let i=1; i<=3; i++) {
    // const list = document.createElement("li");
    content += `
          <li>${i}</li>
    `
    // list.textContent = `${i} item`;
    // target.appendChild(list);
}
