let count = 0;

function add() {
    count ++;
    document.getElementById("count-el").innerText = count
    console.log(`The count is ${count}`);
}

function save() {
    alert(`The count is saved at ${count}`);
    // console.log(`The count is saved at ${count}`);
}