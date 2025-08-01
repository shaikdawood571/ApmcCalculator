let calculatedAmount = 0;  // Global variable to store netAmount

function calculateAmount() {
    let totalBags = parseFloat(document.getElementById('totalBags').value);
    let netWeight = parseFloat(document.getElementById('netWeight').value);
    let price = parseFloat(document.getElementById('price').value);
    let sootValue = parseFloat(document.getElementById('myDropdown').value);

    if (isNaN(totalBags) || isNaN(netWeight) || isNaN(price) || isNaN(sootValue)) {
        document.getElementById('message').innerText = 'Please fill out all fields with valid numbers.';
        return;
    }

    let netFinalWeight = netWeight - (totalBags * sootValue);
    calculatedAmount = (netFinalWeight / 75) * price;

    document.getElementById('Heading').innerHTML = 'Net Amount Calculated is:';
    document.getElementById('NetAmount').innerHTML = calculatedAmount.toFixed(3);
    document.getElementById('message').innerHTML = '';

    document.getElementById("resultBox").classList.remove("d-none");
}

function clearFields() {
    const fields = [
        "totalBags", "netWeight", "price", "myDropdown",
        "customerName", "customerContact", "customerAddress"
    ];

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el.tagName === "SELECT") {
            el.selectedIndex = 0;
        } else {
            el.value = "";
        }
    });

    document.getElementById("resultBox").classList.add("d-none");
    document.getElementById("NetAmount").innerHTML = "";
    document.getElementById("Heading").innerHTML = "";
    document.getElementById("message").innerHTML = "";
}

function generateBill() {
  const bags = document.getElementById("totalBags").value.trim();
  const weight = document.getElementById("netWeight").value.trim();
  const price = document.getElementById("price").value.trim();
  const soot = document.getElementById("myDropdown").value.trim();
  const name = document.getElementById("customerName").value.trim();
  const contact = document.getElementById("customerContact").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const calculatedAmount = parseFloat(document.getElementById("NetAmount").textContent) || 0;

  const weighBridge = parseFloat(document.getElementById("weighBridge").value) || 0;
  const laborCharges = parseFloat(document.getElementById("laborCharges").value) || 0;

  if (!bags || !weight || !price || !soot) {
    alert("Please enter all product details before generating the bill.");
    return;
  }

  const finalAmount = calculatedAmount - weighBridge - laborCharges;

  // ✅ Calculate weight per bag safely
  let weightPerBag = 0;
  if (parseFloat(bags) > 0 && !isNaN(parseFloat(weight))) {
    weightPerBag = parseFloat(weight) / parseFloat(bags);
  }

  // ✅ Include weightPerBag (wpb) in the URL
  const url = `bill.html?bags=${encodeURIComponent(bags)}&weight=${encodeURIComponent(weight)}&price=${encodeURIComponent(price)}&soot=${encodeURIComponent(soot)}&amount=${encodeURIComponent(calculatedAmount.toFixed(2))}&name=${encodeURIComponent(name)}&contact=${encodeURIComponent(contact)}&address=${encodeURIComponent(address)}&weigh=${encodeURIComponent(weighBridge)}&labor=${encodeURIComponent(laborCharges)}&wpb=${encodeURIComponent(weightPerBag.toFixed(2))}&finalAmount=${encodeURIComponent(finalAmount.toFixed(2))}`;
  window.open(url, "_blank", "width=800,height=600");
}



