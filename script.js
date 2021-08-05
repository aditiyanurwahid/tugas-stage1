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

// Fitur search sedang dalam proses pengerjaan
