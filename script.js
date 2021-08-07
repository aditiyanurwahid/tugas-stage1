// Kasus Covid Indonesia
const dataIndonesia = fetch("https://covid19.mathdro.id/api/countries/Indonesia")
  .then((response) => response.json())
  .then(
    (data) =>
      (document.getElementById("confirmed-indonesia").innerHTML = `Confirmed: ${data.confirmed.value}`) +
      (document.getElementById("recovered-indonesia").innerHTML = `Recovered: ${data.recovered.value}`) +
      (document.getElementById("deaths-indonesia").innerHTML = `Deaths: ${data.deaths.value}`)
  );

// Kasus Covid Global
const dataGlobal = fetch("https://covid19.mathdro.id/api")
  .then((response) => response.json())
  .then(
    (data) =>
      (document.getElementById("confirmed-global").innerHTML = `Confirmed: ${data.confirmed.value}`) +
      (document.getElementById("recovered-global").innerHTML = `Recovered: ${data.recovered.value}`) +
      (document.getElementById("deaths-global").innerHTML = `Deaths: ${data.deaths.value}`)
  );

// Tampil Semua Negara
const allCountry = fetch("https://covid19.mathdro.id/api/confirmed")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i <= 200; i++) {
      document.querySelector(".tampilCari").innerHTML += `<section>
        <div class="container-fluid">
          <div class="row text-center">
            <div class="fw-light fs-5 bg-dark bg-gradient text-white" id="countryRegion">${data[i].countryRegion}</div>
            <div class="col bg-warning bg-gradient text-white" id="confirmrd">Confirmed: ${data[i].confirmed}</div>
            <div class="col bg-success bg-gradient text-white" id="recovered">Recovered: ${data[i].recovered}</div>
            <div class="col bg-danger bg-gradient text-white" id="deaths">Deaths: ${data[i].deaths}</div>
          </div>
        </div>
      </section>
      `;
    }
  });

// Search
const inputKeyword = document.querySelector(".input-keyword");
const searchButton = document.querySelector(".search-button").addEventListener("click", () => searchCountry(inputKeyword.value));

const searchCountry = async (country) => {
  let data = await fetch(`https://covid19.mathdro.id/api/countries/${country}`, {
    method: "GET",
  });
  data = await data.json();
  console.log(data);

  let tampilNegara = `<section>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="fw-light fs-5 bg-dark bg-gradient text-white" id="countryRegion">${country}</div>
      <div class="col bg-warning bg-gradient text-white" id="confirmrd">Confirmed: ${data.confirmed.value}</div>
      <div class="col bg-success bg-gradient text-white" id="recovered">Recovered: ${data.recovered.value}</div>
      <div class="col bg-danger bg-gradient text-white" id="deaths">Deaths: ${data.deaths.value}</div>
    </div>
  </div>
</section>
`;
  document.querySelector(".tampilCari").innerHTML = tampilNegara;
};
