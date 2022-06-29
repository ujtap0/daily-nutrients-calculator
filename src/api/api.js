import axios from "axios";

export const getNutrientData = async(foodName) => {
  const response = await axios.get(`http://localhost:8080?foodName=${foodName}`);
  console.log(response);
  return response.data;
}