function calculateCost() {
  const bwPages = parseInt(document.getElementById("bwPages").value) || 0;
  const colorPages = parseInt(document.getElementById("colorPages").value) || 0;
  const bindingCost = parseInt(document.getElementById("bindingCost").value);
  const sheetCost = parseInt(document.getElementById("sheetCost").value);

  const bwRate = 2;
  const colorRate = 6;

  const singleBookCost = (bwPages * bwRate) + (colorPages * colorRate) + bindingCost + sheetCost;
  const twoBooksCost = singleBookCost * 2;

  const practicalRecord = 70;
  const serviceCharge = 20;
  const totalAmountToSend = twoBooksCost + practicalRecord + serviceCharge;

  document.getElementById("result").innerHTML =
    `📘 The cost of Estimation for 1 Book is: <strong>₹${singleBookCost}</strong>`;

  document.getElementById("doubleCost").innerHTML =
    `📗 Cost for 2 Books: 2 × ₹${singleBookCost} = <strong>₹${twoBooksCost}</strong>`;

  document.getElementById("finalAmount").innerHTML =
    `📦 Total Amount to Send (Including Practical Record ₹70 + Service ₹20): <strong>₹${totalAmountToSend}</strong>`;
}
