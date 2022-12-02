var url_atual = window.location.href;
var a = url_atual.split("?");
var number = a[1];
console.log(number);
fetch(`https://pokeapi.co/api/v2/pokemon-species/${number}/`)
  .then((response) => response.json())
  .then((data2) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((response) => response.json())

      .then((data) => {
        //handle data
        document.getElementById("title").innerHTML = data.name;
        document.getElementById("pokemonDetails").innerHTML = `

<div class="container">
        <div class="content-up ${data.types[0].type.name}">
          <div class="container-up-content">
            <div class="info-up">
              <span class="pokemon-name white">${data.name}</span>

              <div class="info-up1">
                <span class="pkn-in white ${data.types[0].type.name}">${
          data.types[0].type.name
        }
              </div>
            </div>
            <div class="pokemon-id white">#${data.id}</div>
          </div>
        </div>
        <div class="img-container ${data.types[0].type.name}">
          <img
            class="pokemon-img"
            src="${data.sprites.other.dream_world.front_default}"
            alt="img-pokemon"
          />
        </div>

        <div class="content-down">
          <div class="container-down-content">
            <div class="container-down-content-header bold">About</div>
            <div class="container-down-content">
              <table>
               
                <tr>
                  <td>Height</td>
                  <td>${data.height / 10} m</td>
                </tr>
                <tr>
                  <td>Weigth</td>
                  <td>${data.weight / 10} kg</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>${data.abilities[0].ability.name}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>${data.types[0].type.name}</td>
                </tr>
                <tr>
                  <td>Egg Groups</td>
                  <td>${data2.egg_groups[0].name}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>${data2.color.name}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div> 

  `;
      });
  });
