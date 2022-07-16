"use strict";
function solveEquation(a, b, c) {

  let arr = [];
  let discriminant = b**2-4*a*c;// код для задачи №1 писать здесь
  if (discriminant === 0) {
    arr.push(- b / (2 * a));
  }
 else if (discriminant > 0) {
  arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
  arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution;
  let P = percent/100/12;
  

  let dateFrom = new Date();                                                                  
  let fullMonthsDataTo = date.getFullYear() * 12 ;              
  let fullMonthsDataFrom = dateFrom.getFullYear() * 12;           
  let n = fullMonthsDataTo - fullMonthsDataFrom;                  
  let Платеж = S * (P + (P / (((1 + P)**n) - 1)));
  totalAmount = (Платеж * n).toFixed(2);


  // код для задачи №2 писать здесь

  return totalAmount;
}


