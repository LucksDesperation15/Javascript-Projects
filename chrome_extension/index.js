const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myLeads = []
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log("Button clicked from addEventListener")
    inputEl.value = ''
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value = ''
        render(myLeads)
    })

})

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

function render(leads) {
    ulEl.innerHTML = ''
    let listItems = ""
    for(let i=0;i<leads.length;i++){
        listItems += `<li>
        <a target=_blank href=${leads[i]}>
        ${leads[i]} 
          </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}