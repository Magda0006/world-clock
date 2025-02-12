function updateTime() {
  //Rome
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
    romeTimeElement.innerHTML = moment()
      .tz("Europe/Rome")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  //Cairo
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    cairoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    cairoTimeElement.innerHTML = moment()
      .tz("Africa/Cairo")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityDate = moment().tz(`${cityTimeZone}`).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(`${cityTimeZone}`)
    .format("hh:mm:ss [<small>]A[</small>]");
  if (event.target.value !== "select") {
    let citiesElement = document.querySelector("#cities");
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>`;
  }
}

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
