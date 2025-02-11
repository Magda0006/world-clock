function updateTime() {
  //Rome
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  romeTimeElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("hh:mm:ss [<small>]A[</small>]");

  //Cairo
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  let cairoTimeElement = cairoElement.querySelector(".time");
  cairoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  cairoTimeElement.innerHTML = moment()
    .tz("Africa/Cairo")
    .format("hh:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
