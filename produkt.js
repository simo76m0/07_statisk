//lav url search objeckt

const urlParams = new URLSearchParams(window.location.search);

//find id

const id = urlParams.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
    fetch(url).then((klar) => klar.json()).then(visProdukt);
}

function visProdukt(produkt){
    document.querySelector(".model").textContent = produkt.productdisplayname;
    document.querySelector("img").src = imagePath;
    document.querySelector("img").alt = produkt.productdisplayname;
    document.querySelector(".farve").textContent = produkt.basecolour;
    document.querySelector(".brand").textContent = produkt.brandname;
}

hentData();