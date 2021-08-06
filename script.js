const dataIndonesia = fetch("https://covid19.mathdro.id/api/countries/Indonesia")
  .then((response) => response.json())
  .then(
    (data) =>
      (document.getElementById("confirmed-indonesia").innerHTML = `Confirmed: ${data.confirmed.value}`) +
      (document.getElementById("recovered-indonesia").innerHTML = `Recovered: ${data.recovered.value}`) +
      (document.getElementById("deaths-indonesia").innerHTML = `Deaths: ${data.deaths.value}`)
  );

const dataGlobal = fetch("https://covid19.mathdro.id/api")
  .then((response) => response.json())
  .then(
    (data) =>
      (document.getElementById("confirmed-global").innerHTML = `Confirmed: ${data.confirmed.value}`) +
      (document.getElementById("recovered-global").innerHTML = `Recovered: ${data.recovered.value}`) +
      (document.getElementById("deaths-global").innerHTML = `Deaths: ${data.deaths.value}`)
  );

// SEMUA NEGARA
const semuaNegara = document.getElementById("semuaNegara");
const allCountry = fetch("https://covid19.mathdro.id/api/confirmed")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => {
      semuaNegara.innerHTML += `
      <section>
      <div class="container-fluid">
        <div class="row text-center">
          <div class="fw-light fs-5 bg-dark bg-gradient text-white" id="countryRegion">${data.countryRegion}</div>
          <div class="col bg-warning bg-gradient text-white" id="confirmrd">Confirmed: ${data.confirmed}</div>
          <div class="col bg-success bg-gradient text-white" id="recovered">Recovered: ${data.recovered}</div>
          <div class="col bg-danger bg-gradient text-white" id="deaths">Deaths: ${data.deaths}</div>
        </div>
      </div>
      </section>
      `;
    });
  });
