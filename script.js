document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById("main");
  const totalDisplay = document.getElementById("total");
  const cartItems = document.getElementById("cart-items");
  let total = 0;

  // Termékek definiálása
  const products = [
    {name: "BSD Dazai Osamu mug", seller:"My Mug", price:"2.000.000 Ft", State:'<button><a class="other-a" href="Dazai_burning_house.html">Mug-page</a></button>', img:"képek/Burning_Dazai_Osamu.png"},
    {name: "Cat mug", seller:"My Mug", price:"2.000.000 Ft", State:"Only pre-orderable", img:"képek/cat.png"},
    {name: '"Á, hogy volt házi" mug', seller:"My Mug", price:"3.000.000 Ft", State:"Only pre-orderable", img:"képek/volt_hazi.png"},
    {name: "Destroying an UNO reverse card mug", seller:"My Mug", price:"9.500.000 Ft", State:"Only pre-orderable", img:"képek/destroyed_uno_reverse_card.png"},
    {name: "Sasuke and a cool UNO reverse card mug", seller:"My Mug", price:"2.500.000 Ft", State:"Only pre-orderable", img:"képek/anime_reverse_card.png"},
    {name: "+4 UNO cards from a frog mug", seller:"My Mug", price:"3.500.000 Ft", State:'<button><a class="other-a" href="4-uno-cards.html">Mug-page</a></button>', img:"képek/4_uno-cards.png"},
    {name: "Bald L mug", seller:"My Mug", price:"2.000.000 Ft", State:"Only pre-orderable", img:"képek/Bald_L.png"},
    {name: "Sleeping bear mug", seller:'<a class="seller" href="https://www.etsy.com/https://www.etsy.com/listing/4377559622/pink-teddy-blanket-mug">Etsy</a>', State:"Only pre-orderable", price:"7562 Ft", img:"képek/Etsy_bearmug.webp"}
  ];

  // Home & About tartalom mentése stringben
  const homeContent = document.getElementById("home").outerHTML + document.getElementById("Products").outerHTML + document.getElementById("about").outerHTML;

  // NAVIGÁCIÓ kezelése
  document.querySelectorAll('.nava').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nava').forEach(n => n.classList.remove('active'));
      a.classList.add('active');

      const id = a.id;

      if(id === 'nav-home'){
        main.innerHTML = homeContent;
      }
      else if(id === 'nav-products'){
        main.innerHTML = '<h2>Products</h2><h3 class="h83">Check out our most featured products!</h3>';
        const container = document.createElement("div");
        container.classList.add("catalogue_products");

        products.forEach(p => {
          const div = document.createElement("div");
          div.classList.add("card_products");
          div.innerHTML = `
            <h5>${p.name}</h5>
            <p>Seller: ${p.seller}</p>
            <img src="${p.img}" class="imgug">
            <p>${p.price}</p>
            <p>${p.State}</p>
            <button class="add-cart">Add to Cart</button>
          `;
          container.appendChild(div);
        });
        main.appendChild(container);
      }
      else if(id === 'nav-about'){
        document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
      }
      else if(id === 'nav-contact'){
        alert("Contact: hello@my-mugs.example");
      }
    });
  });

  // Kosár működés
  document.body.addEventListener("click", (event) => {
    if(event.target.classList.contains("add-cart")){
      const card = event.target.closest(".card_products");
      if(!card) return;

      const name = card.querySelector("h5").textContent;
      const price = card.querySelector("p:last-of-type").textContent;
      const imgSrc = card.querySelector("img").src;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${imgSrc}" alt="${name}" class="cart-img" style="width:50px;height:50px;">
        <div>
          <h4>${name}</h4>
          <p>${price}</p>
        </div>
      `;
      cartItems.appendChild(cartItem);

      const priceValue = parseInt(price.replace(/\D/g,"")) || 0;
      total += priceValue;
      totalDisplay.textContent = total.toLocaleString("hu-HU") + " Ft";
    }
  });

  // Alapértelmezett home
  document.getElementById('nav-home').classList.add('active');
});
