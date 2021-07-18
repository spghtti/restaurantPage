const populateMenu = () => {
  let content = document.getElementById("content");

  content.innerHTML = "";

  // Adds pizza

  let pizza = document.createElement("div");
  pizza.id = "pizza";
  pizza.className = "tab-module";

  content.appendChild(pizza);

  let pizzaHeadline = document.createElement("h2");
  pizzaHeadline.innerHTML = "Pizza";

  let pizzaBody = document.createElement("p");
  pizzaBody.innerHTML =
    "<br /> A gooey pizza that looks just like how it does in cartoons. — $16 <br />";

  let pizzaImage = document.createElement("img");
  pizzaImage.src = "images/pizza.jpg";
  pizzaImage.className = "image";

  pizza.appendChild(pizzaHeadline);
  pizza.appendChild(pizzaBody);
  pizza.appendChild(pizzaImage);

  // Adds caprese salad

  let caprese = document.createElement("div");
  caprese.id = "caprese";
  caprese.className = "tab-module";

  content.appendChild(caprese);

  let capreseHeadline = document.createElement("h2");
  capreseHeadline.innerHTML = "Caprese salad";

  let capreseBody = document.createElement("p");
  capreseBody.innerHTML =
    "<br /> It's like a salad but with way less greens and way more cheese. — $10 <br />";

  let capreseImage = document.createElement("img");
  capreseImage.src = "images/caprese.jpeg";
  capreseImage.className = "image";

  caprese.appendChild(capreseHeadline);
  caprese.appendChild(capreseBody);
  caprese.appendChild(capreseImage);

  // Adds gnocchi

  let gnocchi = document.createElement("div");
  gnocchi.id = "gnocchi";
  gnocchi.className = "tab-module";

  content.appendChild(gnocchi);

  let gnocchiHeadline = document.createElement("h2");
  gnocchiHeadline.innerHTML = "Gnocchi";

  let gnocchiBody = document.createElement("p");
  gnocchiBody.innerHTML =
    "<br /> Pillowy balls of starchy goodness that puts even the best pasta to shame. — $22 <br />";

  let gnocchiImage = document.createElement("img");
  gnocchiImage.src = "images/gnocchi.jpg";
  gnocchiImage.className = "image";

  gnocchi.appendChild(gnocchiHeadline);
  gnocchi.appendChild(gnocchiBody);
  gnocchi.appendChild(gnocchiImage);
};

export default populateMenu;
