function calculateCost() {
  const bwPages = parseInt(document.getElementById("bwPages").value) || 0;
  const colorPages = parseInt(document.getElementById("colorPages").value) || 0;function calculateCost() {
  const bwPages = parseInt(document.getElementById("bwPages").value) || 0;
  const colorPages = parseInt(document.getElementById("colorPages").value) || 0;
  const bindingCost = parseInt(document.getElementById("bindingCost").value);
  const sheetCost = parseInt(document.getElementById("sheetCost").value);

  const bwRate = 2;
  const colorRate = 6;

  const singleBookCost = (bwPages * bwRate) + (colorPages * colorRate) + bindingCost + sheetCost;

  // 2 books cost
  const twoBooksCost = singleBookCost * 2;

  // Add-ons
  const practicalRecord = 70;
  const serviceCharge = 20;

  const totalToSend = twoBooksCost + practicalRecord + serviceCharge;

  // Update the result display
  document.getElementById("result").innerHTML =
    `The cost of Estimation for your Project is: <strong>₹${singleBookCost}</strong>`;

  document.getElementById("doubleCost").innerHTML =
    `📘 Cost for 2 Books: 2 × ₹${singleBookCost} = <strong>₹${twoBooksCost}</strong>`;

  document.getElementById("finalAmount").innerHTML =
    `📦 Total Amount to Send (with Practical Record ₹70 + Service ₹20): <strong>₹${totalToSend}</strong>`;
}

  const bindingCost = parseInt(document.getElementById("bindingCost").value);
  const sheetCost = parseInt(document.getElementById("sheetCost").value);

  const bwRate = 2;
  const colorRate = 6;

  const totalCost = (bwPages * bwRate) + (colorPages * colorRate) + bindingCost + sheetCost;

  document.getElementById("result").innerHTML =
    `The cost of Estimation for your Project is: <strong>₹${totalCost}</strong>`;
}
