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

// document
//   .getElementById("productnumber")
//   .addEventListener("input", quantityWarning);

function quantityWarning() {
  if (
    document.getElementById("productnumber").value < 0 &&
    document.getElementById("productnumber").value > 100
  ) {
    document.getElementById("quantityWarning").classList.remove("hidden");
  }
  // else {
  //     document.getElementById("quantityWarning").classList.add("hidden");
  //   }
}
document
  .getElementById("calculateBtn")
  .addEventListener("click", quantityWarning);

document.getElementById("datepicker").addEventListener("click", function () {
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

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("datepicker").setAttribute("min", today);
});
