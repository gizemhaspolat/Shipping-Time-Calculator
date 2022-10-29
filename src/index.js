"use strict";

document.getElementById("productstyle").addEventListener("click", function () {
  document.getElementById("dropdown-fabric").classList.toggle("hidden");
  document
    .getElementById("dropdown-fabric")
    .addEventListener("click", fabricSelection);
});

let fabricSelection = function (e) {
  document.getElementById("productstyle").innerHTML = e.target.innerHTML;
};
window.addEventListener("click", function (e) {
  if (e.target.id !== "productstyle") {
    document.getElementById("dropdown-fabric").classList.add("hidden");
  }
});

document
  .getElementById("productnumber")
  .addEventListener("keyup", quantityWarning);
function quantityWarning() {
  if (
    parseInt(document.getElementById("productnumber").value) < 0 ||
    parseInt(document.getElementById("productnumber").value) > 100
  ) {
    document.getElementById("quantityWarning").classList.remove("hidden");
  } else {
    document.getElementById("quantityWarning").classList.add("hidden");
  }
}

document.getElementById("datepicker").addEventListener("click", function () {
  let today = getToday();
  document.getElementById("datepicker").setAttribute("min", today);
});

document.getElementById("datepicker").addEventListener("blur", dateWarning);
function dateWarning() {
  let today = getToday();
  let selectedDay = document.getElementById("datepicker").value;
  console.log(selectedDay);
  if (selectedDay < today) {
    document.getElementById("dateWarning").classList.remove("hidden");
  } else {
    document.getElementById("dateWarning").classList.add("hidden");
  }
}

function getToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return (today = yyyy + "-" + mm + "-" + dd);
}

function calculateShippingDay() {
  let day = document.getElementById("datepicker").value.split("-");
  let fabricType = document.getElementById("productstyle").innerHTML;
  let quantity = document.getElementById("productnumber").value;
  let selectedDay = new Date(day[0], day[1] - 1, day[2]);
  console.log(selectedDay);
  console.log(selectedDay.getDay());

  if (fabricType === "Cotton" && quantity < 50) {
    if (
      selectedDay.getDay() === 0 ||
      selectedDay.getDay() === 1 ||
      selectedDay.getDay() === 2 ||
      selectedDay.getDay() === 3
    ) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 2
      );

      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 4 || selectedDay.getDay() === 5) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 4
      );
      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 6) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 3
      );
      printShippingDate(shippingDay);
    }
  }
  if (fabricType === "Cotton" && quantity >= 50) {
    if (
      selectedDay.getDay() === 0 ||
      selectedDay.getDay() === 1 ||
      selectedDay.getDay() === 2 ||
      selectedDay.getDay() === 3
    ) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 3
      );

      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 4 || selectedDay.getDay() === 5) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 5
      );
      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 6) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 4
      );
      printShippingDate(shippingDay);
    }
  } else if (fabricType === "Linen" && quantity < 50) {
    if (selectedDay.getDay() === 0 || selectedDay.getDay() === 1) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 4
      );

      printShippingDate(shippingDay);
    } else if (
      selectedDay.getDay() === 2 ||
      selectedDay.getDay() === 3 ||
      selectedDay.getDay() === 4 ||
      selectedDay.getDay() === 5
    ) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 6
      );
      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 6) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 5
      );
      printShippingDate(shippingDay);
    }
  } else if (fabricType === "Linen" && quantity >= 50) {
    if (selectedDay.getDay() === 0) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 5
      );

      printShippingDate(shippingDay);
    } else if (
      selectedDay.getDay() === 1 ||
      selectedDay.getDay() === 2 ||
      selectedDay.getDay() === 3 ||
      selectedDay.getDay() === 4 ||
      selectedDay.getDay() === 5
    ) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 7
      );
      printShippingDate(shippingDay);
    } else if (selectedDay.getDay() === 6) {
      let shippingDay = new Date(
        selectedDay.getTime() + 1000 * 60 * 60 * 24 * 6
      );
      printShippingDate(shippingDay);
    }
  }
}

function printShippingDate(shippingDay) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("shippingDay").innerHTML =
    "Your estimated shipping date is " +
    shippingDay.getDate() +
    " " +
    monthNames[shippingDay.getMonth()] +
    " " +
    shippingDay.getFullYear() +
    ".";
}
