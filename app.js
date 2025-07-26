// Write a function
// Take values
// Calculate
// Display
// Clear function

function calculateAmount() {
    let totalBags = parseFloat(document.getElementById('totalBags').value);
    let netWeight = parseFloat(document.getElementById('netWeight').value);
    let price = parseFloat(document.getElementById('price').value);
    let sootValue = parseFloat(document.getElementById('myDropdown').value);
    if (isNaN(totalBags) || isNaN(netWeight) || isNaN(price)) {
        document.getElementById('message').innerText = 'Please fill out all fields with valid numbers.';
        return;
    }

    let netFinalWeight = netWeight - (totalBags * sootValue);
    let netAmount = (netFinalWeight / 75) * price;

    document.getElementById('Heading').innerHTML = 'Net Amount Calculated is:';
    document.getElementById('NetAmount').innerHTML = netAmount.toFixed(3);
    document.getElementById('message').innerHTML = '';
}

function clearFields() {
    document.getElementById('totalBags').value = '';
    document.getElementById('netWeight').value = '';
    document.getElementById('price').value = '';
    document.getElementById('NetAmount').innerHTML = '';
    document.getElementById('Heading').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    //console.log("Cleared!");
}
