function calculateCost() {
  const bwPages = parseInt(document.getElementById("bwPages").value) || 0;
  const colorPages = parseInt(document.getElementById("colorPages").value) || 0;
  const bindingCost = parseInt(document.getElementById("bindingCost").value);
  const sheetCost = parseInt(document.getElementById("sheetCost").value);

  const bwRate = 2;
  const colorRate = 6;

  const totalCost = (bwPages * bwRate) + (colorPages * colorRate) + bindingCost + sheetCost;

  document.getElementById("result").innerHTML =
    `The cost of Estimation for your Project is: <strong>₹${totalCost}</strong>`;
}
