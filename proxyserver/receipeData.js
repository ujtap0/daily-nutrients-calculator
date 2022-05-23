//데이터 가지고 오는 기능
const fetch = require('node-fetch')
const serviceKey ='17tBrvrUnkWYnJbwvourCWiUVvCBc2LLLkLFcuxd6yZ7NnoU0g8nzmfSQzOtHRW/Bxep90BsYvG7XZlaTi5Yyw=='

const receipeData = (foodName,callback) => {
  console.log(foodName)
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=${serviceKey}&desc_kor=${foodName}&pageNo=1&numOfRows=3&type=json`;
    fetch(url,{method: 'GET'})
    .then((res)=>res.json())
    .then((data)=>{ 
      const foodData = data.body.items
      callback(undefined, foodData)
      })
  .catch((error)=>{
    console.log('에러 뜸', error)
    callback(error)
  })
}

module.exports = receipeData