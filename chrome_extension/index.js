const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
console.log(leadsFromLocalStorage)


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log("Button clicked from addEventListener")
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    renderLeads()
})

function renderLeads() {
    ulEl.innerHTML = ''
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        listItems += `<li>
        <a target=_blank href=${myLeads[i]}>
        ${myLeads[i]} 
          </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}