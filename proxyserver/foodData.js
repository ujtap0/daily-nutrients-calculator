//데이터 가지고 오는 기능
const fetch = require('node-fetch')
const serviceKey ='17tBrvrUnkWYnJbwvourCWiUVvCBc2LLLkLFcuxd6yZ7NnoU0g8nzmfSQzOtHRW/Bxep90BsYvG7XZlaTi5Yyw=='

const foodData = (foodName, pageNum,callback) => {
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=${serviceKey}&desc_kor=${foodName}&pageNo=${pageNum}&numOfRows=10&type=json`;
    fetch(url,{method: 'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      callback(undefined, data.body)
      })
  .catch((error)=>{
    console.log('에러 발생', error)
    callback(error)
  })
}

module.exports = foodData