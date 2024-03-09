const clock = document.getElementById('clock');
const dateElement = document.querySelector("#date");

setInterval(function () {
  let currentDate = new Date();
  clock.innerHTML = currentDate.toLocaleTimeString();
  dateElement.innerHTML = currentDate.toDateString();
}, 1000);
