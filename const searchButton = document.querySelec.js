const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("https://covid19.mathdro.id/api/countries/" + inputKeyword.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const negara = data;
      let container = "";
      negara.forEach((m) => (container += m));
      const movieContainer = document.querySelector("movie-container");
      movieContainer.innerHTML = data;
      // for (let i = 0; i <= 200; i++) {
      //   document.getElementById("cariSemuaNegara").innerHTML += `
      //   <section>
      //     <div class="container-fluid">
      //       <div class="row text-center">
      //         <div class="fw-light fs-5 bg-dark bg-gradient text-white" id="countryRegion">${data[i].countryRegion}</div>
      //         <div class="col bg-warning bg-gradient text-white" id="confirmrd">Confirmed: ${data[i].confirmed}</div>
      //         <div class="col bg-success bg-gradient text-white" id="recovered">Recovered: ${data[i].recovered}</div>
      //         <div class="col bg-danger bg-gradient text-white" id="deaths">Deaths: ${data[i].deaths}</div>
      //       </div>
      //     </div>
      //   </section>
      //   `;
      // }
    });
});
