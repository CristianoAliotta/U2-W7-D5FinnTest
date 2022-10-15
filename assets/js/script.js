async function displayLidia() {
  let apiDisney = await fetch("http://ergast.com/api/f1/circuits.json");
  let disneyObject = await apiDisney.json();
  let arrayDisney = disneyObject.data;
  console.log(arrayDisney);
  for (const disneyCard of arrayDisney) {
    document.getElementById("container").innerHTML += `<div class="card">
        <div class="cardContainer">
        <img src=${disneyCard.imageUrl} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <p class="card-text">
            ${disneyCard.name}
          </p>
        </div>
      </div>`;
  }
}

window.onload = async () => {
  await displayLidia();
};
