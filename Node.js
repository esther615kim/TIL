//2021.07.31
Node.js documentation
https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

//2021.07.21
Weather App (mini project)
https://www.youtube.com/watch?v=OE7kml0pigw&list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY&index=3

//2021.07.21
URL
https://www.youtube.com/watch?v=Zhbvui_T9VY&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm&index=14


//2021.07.19
미들웨어
https://thebook.io/006806/ch08/05_01/

//2021.07.11
Schema
https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250

//2021.06.28
학습출처
https://thebook.io/080229/ 


// Express 

{
  "name": "learn-express",
  "version": "0.0.1",
  "description": "익스프레스!",
  "main": "app.js",
  "scripts": {
  "start": "nodemon app"
  },
  "author": "ZeroCho",
  "license": "MIT"
}

// app.js

const express = require('express'); 

const app = express(); //express 실행 app 변수에 할당
app.set('port', process.env.PORT || 3000); //서버 실행 포트 설정 

//index.html

<html>
<head>
  <meta charset="UTF-8" />
  <title>익스프레스 서버</title>
</head>
<body>
  <h1>Express</h1>
</body>
</html>


//app.js
const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  // res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트 대기중');
});
