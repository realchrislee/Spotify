function changePossibilities(amount, denom) {
  if (amount < 1) return 0;
  let count = 0;

  denom.forEach((coin, i) => {
    let adder = (coin == amount) ? 1 : 0;
    console.log(adder);
    let sum = adder + changePossibilities((amount-coin), denom.slice(i));

    count += sum;
  });

  return count;
}