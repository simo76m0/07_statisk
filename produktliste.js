const filNavn = "https://kea-alt-del.dk/t7/api/products";

function hentData(navn) {
  fetch(navn)
    .then((response) => response.json())
    .then(visProdukter);
}

function visProdukter(produkterJSON) {
  const skabelon = document.querySelector("#minSkabelon").content;
  const beholder = document.querySelector("#beholder");

  produkterJSON.forEach((produkt) => {
    const klon = skabelon.cloneNode(true);
    klon.querySelector(".titel").textContent = produkt.productdisplayname;
    klon.querySelector(".pris span").textContent = produkt.price;
    klon.querySelector(".discount_rabat span").textContent = produkt.discount;
    klon.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;

    if (produkt.soldout) {
    klon.querySelector("article").classList.add("sold_out");
}

if (produkt.discount) {
  klon.querySelector("article").classList.add("onSale");
  klon.querySelector(".pris span").style.textDecoration = "line-through";
  klon.querySelector(".discounted_pris span").textContent = produkt.price-(produkt.price/100)*produkt.discount;
}

    beholder.appendChild(klon);
  });

}

hentData(filNavn);
