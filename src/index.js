import populateMenu from "./menu";
import populateContact from "./contact";

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
let content = document.getElementById("content");

home.addEventListener("click", populateHome);
menu.addEventListener("click", populateMenu);
contact.addEventListener("click", populateContact);

//Adds headline

function populateHome() {
  content.innerHTML = "";

  let headline = document.createElement("div");
  headline.id = "headline";
  let headlineText = document.createElement("h1");
  headlineText.innerHTML = "Toadstool Trattoria & Bar";
  headline.appendChild(headlineText);

  content.appendChild(headline);

  // Adds review

  let review = document.createElement("div");
  review.id = "review";

  content.appendChild(review);

  let pastaIcon = document.createElement("img");
  pastaIcon.src = "images/spaghetti.png";
  pastaIcon.id = "icon";

  review.appendChild(pastaIcon);

  let reviewText = document.createElement("p");
  reviewText.innerHTML = `<br /> "Simply the best place I've ever eaten. The food is so real, so authentic -- yet, eating it, you would think there's no way it can exist." <br />`;

  review.appendChild(reviewText);

  let lineBreak = document.createElement("br");
  reviewText.appendChild(lineBreak);

  let quoteSource = document.createElement("p");
  quoteSource.innerHTML = "Rosalina, Michelin-Star chef";
  quoteSource.style.fontFamily = "Playfair Display";
  quoteSource.style.fontSize = "25pt";

  review.appendChild(quoteSource);

  // Adds hours

  let hours = document.createElement("div");
  hours.id = "hours";

  content.appendChild(hours);

  let corkIcon = document.createElement("img");
  corkIcon.src = "images/corkscrew.png";
  corkIcon.id = "icon";

  hours.appendChild(corkIcon);

  let hoursHeadline = document.createElement("h2");
  hoursHeadline.innerHTML = "Hours";

  hours.appendChild(hoursHeadline);

  let schedule = document.createElement("p");
  schedule.innerHTML =
    "<br /> Sunday: 11am - 10pm <br /> Monday: Closed <br /> Tuesday: Closed <br /> Wednesday: 11am - 9pm <br /> Thursday: 11am - 9pm <br /> Friday: 11am - 10pm <br /> Saturday: 11am - 10pm <br />";

  schedule.style.textAlign = "left";
  hours.appendChild(schedule);

  // Adds icon source attribution

  let iconFooter = document.createElement("div");
  iconFooter.id = "icon-attribution";

  iconFooter.innerHTML = `Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>`;

  content.appendChild(iconFooter);
}

populateHome();
