const populateContact = () => {
  let content = document.getElementById("content");

  content.innerHTML = "";

  // Adds Wario

  let wario = document.createElement("div");
  wario.id = "wario";
  wario.className = "tab-module";

  content.appendChild(wario);

  let warioHeadline = document.createElement("h2");
  warioHeadline.innerHTML = "Wario";

  let warioBody = document.createElement("p");
  warioBody.innerHTML =
    "<br /> Manager <br /> 555-555-5555 <br /> wario@warioenterprises.wah";

  let warioImage = document.createElement("img");
  warioImage.src = "images/wario.png";
  warioImage.className = "image";

  wario.appendChild(warioHeadline);
  wario.appendChild(warioBody);
  wario.appendChild(warioImage);

  // Adds Waluigi

  let waluigi = document.createElement("div");
  waluigi.id = "waluigi";
  waluigi.className = "tab-module";

  content.appendChild(waluigi);

  let waluigiHeadline = document.createElement("h2");
  waluigiHeadline.innerHTML = "Waluigi";

  let waluigiBody = document.createElement("p");
  waluigiBody.innerHTML =
    "<br /> Chef <br /> 555-555-5555 <br /> waluigi@warioenterprises.wah";

  let waluigiImage = document.createElement("img");
  waluigiImage.src = "images/waluigi.png";
  waluigiImage.className = "image";

  waluigi.appendChild(waluigiHeadline);
  waluigi.appendChild(waluigiBody);
  waluigi.appendChild(waluigiImage);
};

export default populateContact;
