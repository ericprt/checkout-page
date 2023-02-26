totalItems1 = (click) => {
  const quantityOfItem1 = document.querySelector("#quantity-1");
  const quantityValue1 = parseInt(quantityOfItem1.innerText) + click;
  quantityOfItem1.innerText = quantityValue1;

  if (quantityValue1 < 0) {
    quantityOfItem1.innerText = 0;
  }
};

totalItems2 = (click) => {
  const quantityOfItem2 = document.querySelector("#quantity-2");
  const quantityValue2 = parseInt(quantityOfItem2.innerText) + click;
  quantityOfItem2.innerText = quantityValue2;

  if (quantityValue2 < 0) {
    quantityOfItem2.innerText = 0;
  }
};
