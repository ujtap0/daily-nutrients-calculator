export function calculator (foods) {
  const calculateByNutrient = (type, foods) => foods.reduce((acc, cur) =>{
    if( cur.foodData[type] === 'N/A') return acc;
    return acc + cur.foodData[type]*cur.portion
  }, 0)
  return {
    calorie: +calculateByNutrient('NUTR_CONT1', foods).toFixed(2),
    calbonate: +calculateByNutrient('NUTR_CONT2', foods).toFixed(2),
    protein: +calculateByNutrient('NUTR_CONT3', foods).toFixed(2),
    fat: +calculateByNutrient('NUTR_CONT4', foods).toFixed(2),
    sugar: +calculateByNutrient('NUTR_CONT5', foods).toFixed(2),
    natrium: +(calculateByNutrient('NUTR_CONT6', foods)/1000).toFixed(2),
    cholesterol: +(calculateByNutrient('NUTR_CONT7', foods)/1000).toFixed(2),
    saturatedFattyAcid: +calculateByNutrient('NUTR_CONT8', foods).toFixed(2),
    transFattyAcid: +calculateByNutrient('NUTR_CONT9', foods).toFixed(2),
  }
}