//노드의 라우팅 메니지먼트 기능을 사용
const express = require('express');
const app = express();
const cors = require('cors');
const foodData = require('./foodData.js');

app.use(cors());

app.get('/', async(req, res)=> {
  const { foodName, pageNum } = req.query;
  await foodData(foodName, pageNum, (error, data) => {
    if(error){
      res.send(error)
    }else{
      res.send(data)
    }
  })
})

app.listen(8080, ()=>{
  console.log('서버 8000포트로 연결')
})