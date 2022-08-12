export function calculator (foods) {
  const calculateByNutrient = (type, foods) => foods.reduce((acc, cur) =>{
    if( cur.foodData[type] === 'N/A') return acc;
    return acc + cur.foodData[type]*cur.portion
  }, 0)
  return {
    calorie: calculateByNutrient('NUTR_CONT1', foods),
    calbonate: calculateByNutrient('NUTR_CONT2', foods),
    protein: calculateByNutrient('NUTR_CONT3', foods),
    fat: calculateByNutrient('NUTR_CONT4', foods),
    sugar: calculateByNutrient('NUTR_CONT5', foods),
    natrium: calculateByNutrient('NUTR_CONT6', foods)/1000,
    cholesterol: calculateByNutrient('NUTR_CONT7', foods)/1000,
    saturatedFattyAcid: calculateByNutrient('NUTR_CONT8', foods),
    transFattyAcid: calculateByNutrient('NUTR_CONT9', foods),
  }
}