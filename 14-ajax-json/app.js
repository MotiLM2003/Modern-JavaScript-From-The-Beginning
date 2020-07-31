document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "customer.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = ` 
            <ul>
                <li>id: ${customer.id}
                <li>name: ${customer.name}
                <li>company: ${customer.company}
                <li>phone: ${customer.phone}
            </ul>
          `;

      const div = document.getElementById("customer");
      div.innerHTML = output;

      console.log(this.responseText);
    }
  };
  xhr.send();
}

function loadCustomers() {
  const xhl = new XMLHttpRequest();
  xhl.open("GET", "customers.json", true);
  xhl.onload = function () {
    if (xhl.status === 200) {
      const list = JSON.parse(xhl.responseText);
      let output = "";
      list.forEach(function (customer) {
        output += ` 
             <ul>
                 <li>id: ${customer.id}
                 <li>name: ${customer.name}
                 <li>company: ${customer.company}
                 <li>phone: ${customer.phone}
             </ul>
           `;
      });
        document.getElementById("customers").innerHTML = output;
    }
  };

  xhl.send();
}
