let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")

function add() {
    count ++;
    countEl.textContent = count
    console.log(`The count is ${count}`);
}

function save() {
    let saveAndCount = `${count}, `;
    saveEl.textContent += saveAndCount
    alert(`The count is saved at ${count}`);
    count = 0
    countEl.textContent = count
    console.log(`The count is saved at ${count}`);
}
