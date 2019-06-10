// accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// add new deal to table
function newLocalDeal() {
  var table = document.getElementById("local");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New deal";
  cell2.innerHTML = "$100";
}

function newGetawayDeal() {
  var table = document.getElementById("getaway");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New deal";
  cell2.innerHTML = "$100";
}

function newGoodsDeal() {
  var table = document.getElementById("goods");
  var row = table.insertRow(3);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "New deal";
  cell2.innerHTML = "$100";
}
