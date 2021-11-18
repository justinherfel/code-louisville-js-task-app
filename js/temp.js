
function temperatureConverter(valNum) {
  valNum = new Number(valNum);
  const valNum2 = ((valNum-32)/1.8).toFixed(2);
  document.getElementById("outputCelcius").innerHTML=valNum2;
}
