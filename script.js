// let headerElement = document.getElementById("header")

// headerElement.style.color = 'maroon'

let itemUl = document.getElementById("items")

let items = itemUl.getElementsByClassName("item");

// for( let element of items){
//     element.style.color = 'red'
// }

for( let i = 0; i < items.length; i++){
    items[i].style.color = "magenta"
}