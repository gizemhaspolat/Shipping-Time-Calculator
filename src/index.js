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
  if (selectedDay < today) {
    document.getElementById("dateWarning").classList.remove("hidden");
  } else {
    document.getElementById("dateWarning").classList.add("hidden");
  }
}

function getToday() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
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
  let fabricType = document.getElementById("productstyle").innerHTML.trim();
  let quantity = document.getElementById("productnumber").value;
  let selectedDate = new Date(day[0], day[1] - 1, day[2]);
  let selectedDateInMs = selectedDate.getTime();
  let selectedDay = selectedDate.getDay();

  if (fabricType === "Cotton" && quantity < 50) {
    if (
      selectedDay === 0 ||
      selectedDay === 1 ||
      selectedDay === 2 ||
      selectedDay === 3
    ) {
      printShippingDate(findShippingDay(selectedDateInMs, 2));
    } else if (selectedDay === 4 || selectedDay === 5) {
      printShippingDate(findShippingDay(selectedDateInMs, 4));
    } else if (selectedDay === 6) {
      printShippingDate(findShippingDay(selectedDateInMs, 3));
    }
  }
  if (fabricType === "Cotton" && quantity >= 50) {
    if (
      selectedDay === 0 ||
      selectedDay === 1 ||
      selectedDay === 2 ||
      selectedDay === 3
    ) {
      printShippingDate(findShippingDay(selectedDateInMs, 3));
    } else if (selectedDay === 4 || selectedDay === 5) {
      printShippingDate(findShippingDay(selectedDateInMs, 5));
    } else if (selectedDay === 6) {
      printShippingDate(findShippingDay(selectedDateInMs, 4));
    }
  } else if (fabricType === "Linen" && quantity < 50) {
    if (selectedDay === 0 || selectedDay === 1) {
      printShippingDate(findShippingDay(selectedDateInMs, 4));
    } else if (
      selectedDay === 2 ||
      selectedDay === 3 ||
      selectedDay === 4 ||
      selectedDay === 5
    ) {
      printShippingDate(findShippingDay(selectedDateInMs, 6));
    } else if (selectedDay === 6) {
      printShippingDate(findShippingDay(selectedDateInMs, 5));
    }
  } else if (fabricType === "Linen" && quantity >= 50) {
    if (selectedDay === 0) {
      printShippingDate(findShippingDay(selectedDateInMs, 5));
    } else if (
      selectedDay === 1 ||
      selectedDay === 2 ||
      selectedDay === 3 ||
      selectedDay === 4 ||
      selectedDay === 5
    ) {
      printShippingDate(findShippingDay(selectedDateInMs, 7));
    } else if (selectedDay === 6) {
      printShippingDate(findShippingDay(selectedDateInMs, 6));
    }
  }
}

function findShippingDay(selectedDateInMs, shipDaysLaterFromNow) {
  return new Date(
    selectedDateInMs + 1000 * 60 * 60 * 24 * shipDaysLaterFromNow
  );
}
function printShippingDate(shippingDate) {
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
  document.getElementById("shippingDay").classList.add("hidden");
  document.getElementById("shippingDateWarning").classList.remove("hidden");
  document.getElementById("estShippingDate").innerHTML =
    shippingDate.getDate() +
    " " +
    monthNames[shippingDate.getMonth()] +
    " " +
    shippingDate.getFullYear();
}

window.openModal = function () {
  document.getElementById("modal").style.display = "block";
  document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
};

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-y-hidden");
  }
};

window.closeModal = function () {
  document.getElementById("modal").style.display = "none";
  document
    .getElementsByTagName("body")[0]
    .classList.remove("overflow-y-hidden");
};

document.onkeydown = function (event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-y-hidden");
  }
};

document.getElementById("calculateBtn").addEventListener("click", function () {
  console.log(document.getElementById("productstyle").innerHTML);
  console.log(document.getElementById("datepicker").innerHTML);
  console.log(document.getElementById("productnumber").value);
  if (
    document.getElementById("productstyle").innerHTML.length > 100 ||
    document.getElementById("productnumber").value === "" ||
    document.getElementById("datepicker").value === ""
  ) {
    openModal();
  }
  calculateShippingDay();
});

function showTooltip() {
  document.getElementById("tooltip").classList.remove("hidden");
}

function hideTooltip() {
  document.getElementById("tooltip").classList.add("hidden");
}
