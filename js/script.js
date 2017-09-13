
var link = document.querySelector(".btn-booking");

var booking = document.querySelector(".booking-form");

var form =booking.querySelector("form");
var arrival = booking.querySelector(".date-arrival");
var departure = booking.querySelector(".date-departure");



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  booking.classList.toggle("booking-form-show");
  arrival.focus()

});
