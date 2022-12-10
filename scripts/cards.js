

var main_div = document.querySelector('main')

class Item_card {

    material = "aboba"

    constructor(material, title, price, background, color, type){
        this.material = material;
        this.title = title;
        this.price = price;
        this.background = background;
        this.color = color;
        this.type = type;
    }


    get material()  {
        return this.material;
    }


}

var items = []
items.push(new Item_card("хлопок 100%", 'Худи "Improve fan"', 1300, "photo/productsPhoto/hoodi1.png", "blue", "hoodie"))
items.push(new Item_card("хлопок 100%", 'Худи "Player Hoodie" Синее', 1200, "photo/productsPhoto/hoodiePlayer.png", "blue", "hoodie"))
items.push(new Item_card("хлопок 100%", 'Худи "Player Hoodie" Красное', 1100, "photo/productsPhoto/hoodiePlayerRed.png", "red", "hoodie"))
items.push(new Item_card("хлопок 100%", 'Джерси "Player Jersey" Синее', 1400, "photo/productsPhoto/jerseyPlayer.png", "blue", "jersey"))
items.push(new Item_card("хлопок 100%", 'Джерси "Player Jersey" Красное', 1500, "photo/productsPhoto/jerseyPlayerRed.png", "red", "jersey"))

array_to_Cards(items)

function array_to_Cards(items) {
    clearCardsTable()

    for(i = 0; i < items.length; i++){
        itemToCard(items[i])
    }
}

function itemToCard(item){
    let tmp_block = document.createElement("div")
    tmp_block.classList.add("productBlock")
    tmp_block.classList.add(item.color)
    tmp_block.classList.add(item.type)



    let tmp_info = document.createElement("div")
    tmp_info.classList.add("productInfo")
    tmp_block.appendChild(tmp_info)

    let tmp_price = document.createElement("p")
    tmp_price.classList.add("price")
    tmp_price.innerHTML = item.price + 'р'

    let tmp_text = document.createElement("p")
    tmp_text.innerHTML ='Материал: ' + item.material

    let tmp_title = document.createElement("h1")
    tmp_title.innerHTML = item.title
 
    tmp_info.innerHTML = '<img src="'+item.background+'">'

    tmp_info.appendChild(tmp_price)
    tmp_info.appendChild(tmp_text)
    tmp_block.appendChild(tmp_title)

    menu.appendChild(tmp_block)
    
}

function clearCardsTable(){
    let containers = document.querySelectorAll('.productBlock')

    containers.forEach(item => {
        menu.removeChild(item)
    })
}