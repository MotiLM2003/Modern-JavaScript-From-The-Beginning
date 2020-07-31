document.getElementById("load-form").addEventListener("submit", function (e) {
  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";
    calculateResults();
  }, 2000);

  e.preventDefault();
});
document.getElementById("loading").style.dispay = "block";

function calculateResults(e) {
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monethlyPayment = document.getElementById("monthely-payment");
  const totoalPaymet = document.getElementById("total-payment");
  const totalInterset = document.getElementById("total-interset");

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calaculatedPayments = parseFloat(years.value) * 12;

  // compute montly payments
  const x = Math.pow(1 + calculateInterest, calaculatedPayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    monethlyPayment.value = monthly.toFixed(2);
    totoalPaymet.value = (monthly * calaculatedPayments).toFixed(2);
    totalInterset.value = (monthly * calaculatedPayments - principal).toFixed(
      2
    );
  } else {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "none";
    showError("Please check yourn numbers.");
  }
}

function showError(text) {
  // get elemets
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(text));

  card.insertBefore(errorDiv, heading);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
