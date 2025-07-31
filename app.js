<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>APMC Calculator</title>
  <link rel="icon" href="img.png" type="image/x-icon" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --primary-color: #2e86de;
      --text-color: #2c3e50;
      --background: #f2f2f2;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: "Segoe UI", sans-serif;
      background-color: var(--background);
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 500px;
      margin: auto;
      padding: 20px;
    }

    .card {
      background-color: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
    }

    h1 {
      font-size: 22px;
      text-align: center;
      color: var(--text-color);
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-weight: 600;
      margin-top: 12px;
      margin-bottom: 6px;
    }

    input,
    select {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 16px;
    }

    button {
      width: 100%;
      margin-top: 15px;
      padding: 14px;
      background-color: var(--primary-color);
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #1b4f72;
    }

    .result-box {
      margin-top: 20px;
      padding: 15px;
      background-color: #eafaf1;
      border-left: 4px solid #2ecc71;
      font-size: 16px;
      display: none;
      border-radius: 6px;
    }

    .customer-section {
      display: none;
      margin-top: 20px;
      border-top: 1px solid #ddd;
      padding-top: 15px;
    }

    .section-title {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
      color: #333;
    }

    @media screen and (max-width: 480px) {
      h1 {
        font-size: 20px;
      }

      input,
      select,
      button {
        font-size: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>APMC Calculator</h1>

      <label for="totalBags">Total Bags</label>
      <input id="totalBags" type="number" placeholder="Enter total bags" />

      <label for="netWeight">Net Weight (kg)</label>
      <input id="netWeight" type="number" placeholder="Enter net weight" />

      <label for="price">Price per Bag</label>
      <input id="price" type="number" placeholder="Enter price per bag" />

      <label for="myDropdown">Soot Deduction</label>
      <select id="myDropdown">
        <option value="">-- Select Soot --</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
      </select>

      <button onclick="calculateAmount()">Calculate Amount</button>

      <div class="result-box" id="resultBox">
        <strong>Net Amount:</strong> ₹<span id="NetAmount">0</span>
      </div>

      <div class="customer-section" id="customerSection">
        <div class="section-title">Customer Details</div>

        <label for="customerName">Customer Name</label>
        <input id="customerName" type="text" placeholder="Enter customer name" />

        <label for="customerContact">Contact Number</label>
        <input id="customerContact" type="text" placeholder="Enter contact number" />

        <label for="customerAddress">Address</label>
        <input id="customerAddress" type="text" placeholder="Enter address" />

        <button onclick="generateBill()">Generate Bill</button>
      </div>
    </div>
  </div>

  <script>
    let calculatedAmount = 0;

    function calculateAmount() {
      const bags = document.getElementById("totalBags").value.trim();
      const price = document.getElementById("price").value.trim();
      const soot = document.getElementById("myDropdown").value.trim();

      if (!bags || !price || !soot) {
        alert("Please enter product details first.");
        return;
      }

      calculatedAmount =
        parseFloat(bags) * parseFloat(price) -
        parseFloat(soot) * parseFloat(bags);

      document.getElementById("NetAmount").textContent =
        calculatedAmount.toFixed(2);
      document.getElementById("resultBox").style.display = "block";
      document.getElementById("customerSection").style.display = "block";
    }

    function generateBill() {
      const bags = document.getElementById("totalBags").value.trim();
      const weight = document.getElementById("netWeight").value.trim();
      const price = document.getElementById("price").value.trim();
      const soot = document.getElementById("myDropdown").value.trim();

      const name = document.getElementById("customerName").value.trim();
      const contact = document.getElementById("customerContact").value.trim();
      const address = document.getElementById("customerAddress").value.trim();

      if (!name || !contact || !address) {
        alert("Please enter customer details before generating the bill.");
        return;
      }

      const url = `bill.html?bags=${encodeURIComponent(
        bags
      )}&weight=${encodeURIComponent(weight)}&price=${encodeURIComponent(
        price
      )}&soot=${encodeURIComponent(soot)}&amount=${encodeURIComponent(
        calculatedAmount.toFixed(2)
      )}&name=${encodeURIComponent(name)}&contact=${encodeURIComponent(
        contact
      )}&address=${encodeURIComponent(address)}`;

      window.open(url, "_blank", "width=800,height=600");
    }
  </script>
</body>
</html>
