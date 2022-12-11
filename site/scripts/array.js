var btn_filter = document.getElementById("filter_array")
var btn_sort = document.getElementById("sort_array")
var btn_red = document.getElementById("redOnly")
var btn_blue = document.getElementById("blueOnly")
var btn_jers = document.getElementById("jerseyOnly")
var btn_hood = document.getElementById("hoodieOnly")
var btn_all = document.getElementById("showAll")
var menu = document.querySelector(".productsMenu")
var sortCounter = 1

btn_filter.addEventListener("click", () => {
    let a = prompt("Выдать товары по цене от:")
    let b = prompt("Выдать товары по цене до:")
    let res_array = filterArray(items, a, b)
    array_to_Cards(res_array)
})

btn_sort.addEventListener("click", () =>{
    if (sortCounter === 1){
        clearCardsTable()
        let res_array = items.sort(compareItemsHigher)
        array_to_Cards(res_array)
        sortCounter = 0
    }
    else{
        clearCardsTable()
        let res_array = items.sort(compareItemsLower)
        array_to_Cards(res_array)
        sortCounter = 1 
    }
})


btn_red.addEventListener("click", () =>{
    array_to_Cards(items)
    let containers = document.querySelectorAll('.productBlock')

    containers.forEach(item => {
        if (item.classList.contains("blue")){
            menu.removeChild(item)
        }
    })
})

btn_blue.addEventListener("click", () =>{
    array_to_Cards(items)
    let containers = document.querySelectorAll('.productBlock')

    containers.forEach(item => {
        if (item.classList.contains("red")){
            menu.removeChild(item)
        }
    })
})

btn_all.addEventListener("click", ()=> {
    array_to_Cards(items);
})

btn_jers.addEventListener("click", () =>{
    array_to_Cards(items)
    let containers = document.querySelectorAll('.productBlock')

    containers.forEach(item => {
        if (item.classList.contains("hoodie")){
            menu.removeChild(item)
        }
    })
})

btn_hood.addEventListener("click", () =>{
    array_to_Cards(items)
    let containers = document.querySelectorAll('.productBlock')

    containers.forEach(item => {
        if (item.classList.contains("jersey")){
            menu.removeChild(item)
        }
    })
})


function filterArray(list_of_cards, from, to){
    return list_of_cards.filter(item => item.price > from && item.price < to )
}

function swap(item1, item2){
    let itemtmp = item2
    item2 = item1
    item1 = itemtmp
}

function compareItemsHigher(itemFirst, itemSecond){
    if (itemFirst.price > itemSecond.price) return 1
    if (itemFirst.price === itemSecond.price) return 0
    if (itemFirst.price  < itemSecond.price) return -1
}

function compareItemsLower(itemFirst, itemSecond){
    if (itemFirst.price > itemSecond.price) return -1
    if (itemFirst.price === itemSecond.price) return 0
    if (itemFirst.price  < itemSecond.price) return 1
}
