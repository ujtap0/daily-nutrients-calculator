export function calculator (foods) {
  return {
    calorie: foods.reduce((acc, cur) => acc + cur.NUTR_CONT1*cur.portion/100),
    calbonate: foods.reduce((acc, cur) => acc + cur.NUTR_CONT2*cur.portion/100),
    protein: foods.reduce((acc, cur) => acc + cur.NUTR_CONT3*cur.portion/100),
    fat: foods.reduce((acc, cur) => acc + cur.NUTR_CONT4*cur.portion/100),
    sugar: foods.reduce((acc, cur) => acc + cur.NUTR_CON5*cur.portion/100),
    natrium: foods.reduce((acc, cur) => acc + cur.NUTR_CON6*cur.portion/100/1000),
  }
}