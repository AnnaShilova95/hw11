const products =  {
    "item1": {
    "photo": "./img/item1.png", 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00" },

    "item2": {
    "photo": './img/item2.png', 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},

    "item3": {
    "photo": "./img/item3.png", 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00" },

    "item4": {
    "photo": './img/item4.png', 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"},

    "item5": {
    "photo": "./img/item5.png", 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00" },

    "item6": {
    "photo": './img/item6.png', 
    "title": "ELLERY X M 'O CAPSULE", 
    "descr": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price": "$52.00"}
    }

document.body.onload = () => {    
const featuredItemsEl = document.querySelector('div.FeaturedItems');
let array = new Array();
for (let i in products) {
array.push([i, products[i]]);
}
createFieldCardProduct(array, featuredItemsEl);
}

function createFieldCardProduct(prod, featuredItemsEl) {
for (let i = 0; i < prod.length; i++) {
containerCard = document.createElement('div');
containerCard.classList.add('cntCardProduct');
featuredItemsEl.appendChild(containerCard);

containerPhoto = document.createElement('div');
containerPhoto.classList.add('cntPhoto');
containerCard.appendChild(containerPhoto);

photoProduct = document.createElement('img');
photoProduct.src = prod[i][1].photo;
containerPhoto.appendChild(photoProduct);

containerDescription = document.createElement('div');
containerDescription.classList.add('cntDescription');
containerCard.appendChild(containerDescription);

titleProduct = document.createElement('div');
titleProduct.classList.add('titleProduct');
titleProduct.textContent = prod[i][1].title;
containerDescription.appendChild(titleProduct);

descProduct = document.createElement('span');
descProduct.classList.add('descrProduct');
descProduct.textContent = prod[i][1].descr;
containerDescription.appendChild(descProduct);

priceProduct = document.createElement('div');
priceProduct.classList.add('priceProduct');
priceProduct.textContent = prod[i][1].price;
containerDescription.appendChild(priceProduct);
}

}