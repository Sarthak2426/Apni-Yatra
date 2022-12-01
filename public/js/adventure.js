let adventures;
async function loader() {
  let req = new Request("./adventure.json");
  let res = await fetch(req);
  let data = await res.json();
  console.log(data);
  adventures = data;
  showAdventures(adventures);
}

loader();

let cat = document.getElementById("Agrid");

function showAdventures(adventureData) {
  console.log(adventureData);
  for (i = 0; i <= 10; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("adventure");
    let img = document.createElement("img");
    img.src = adventures[i].image;
    console.log(adventures[i].image);
    let div2 = document.createElement("div");
    div2.classList.add("Atext");
    let p = document.createElement("p");
    p.innerHTML = `${adventures[i].name}`;
    let button = document.createElement("button");
    button.innerHTML = `${adventures[i].tours} Tours`;
    div2.appendChild(p);
    div2.appendChild(button);
    div1.appendChild(img);
    div1.appendChild(div2);
    cat.appendChild(div1);
  }
}
