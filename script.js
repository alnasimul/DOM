// let headerElement = document.getElementById("header")

// headerElement.style.color = 'maroon'

// let itemUl = document.getElementById("items")

// let items = itemUl.getElementsByClassName("item");

// for( let element of items){
//     element.style.color = 'red'
// }

// for( let i = 0; i < items.length; i++){
//     items[i].style.color = "magenta"
// }

// let items = document.getElementsByTagName('li')

// console.log(items)

// let lastItem = document.querySelector('.item:nth-child(1)');

// // for (let element of lastItems){
// //     element.style.color = 'red';
// // }

// lastItem.style.color = 'red'

// console.log(lastItem)

// parent/child relation
//const grandparent = document.querySelector('.todo-list')
//const parent = grandparent.children
//const children = grandparent.querySelectorAll('.item');

//console.log(children)

// const children = document.querySelector('.item')
// const parent = children.parentElement;
// const grandparent = children.closest('.todo-list')

// console.log(grandparent)

// const childrenOne = document.querySelector('.item')
// const childrenTwo = childrenOne.nextElementSibling;

// childrenTwo.style.color = 'red'

const childrenTwo = document.querySelector('.item').nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;

childrenOne.style.color = 'red'

console.log(childrenTwo)