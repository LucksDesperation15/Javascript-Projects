import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL : "https://playground-99818-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDb = ref(database, "shoppingList")

onValue(shoppingListInDb, function(snapshot){

    if (snapshot.exists()) {
        clearShoppingListEl()
        let shoppingList = Object.entries(snapshot.val())
        for (let i = 0;i<shoppingList.length;i++){
            let currentItem = shoppingList[i]
            let currentItemID = currentItem[0]
            let currentItemVal = currentItem[1]
            appendItemToShoppingListEl(currentItem)
        }
    }else{
        shoppingListEl.innerHTML = "No items here... yet"
    }
})

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

const shoppingListItemsEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDb, inputValue)

    clearInputFieldEl()

    console.log(inputValue)
})

function clearShoppingListEl(){
    shoppingListItemsEl.innerHTML = ""
}

function clearInputFieldEl(){
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item){
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    shoppingListItemsEl.append(newEl)

    newEl.addEventListener("dblclick", function(){
        let exactLocationOfItemInDb = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDb)
    })
}

