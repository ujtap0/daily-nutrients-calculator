import axios from "axios";

export const getNutrientData = async(foodName, pageNum) => {
  const response = await axios.get(`http://localhost:8080?foodName=${foodName}&pageNum=${pageNum}`);
  console.log(response);
  return response.data;
}