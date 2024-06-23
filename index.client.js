requestIdleCallback(start);
const $services = document.getElementById("services");

async function start() {
  // Fetch the home page content from home-content json file
  const resp = await fetch("./assets/content/home-content.json");
  const data = await resp.json();

  for (let d of data) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.textContent = d.title;
    p.textContent = d.description;

    div.className = "card";
    div.appendChild(h3);
    div.appendChild(p);

    $services.appendChild(div);
  }
}
