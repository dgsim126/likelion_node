require("dotenv").config();
const express= require("express");
const expressLayout= require("express-ejs-layouts");
const connectDb= require("./config/db");
const cookieParser= require("cookie-parser");

const app= express();
const port= process.env.PORT || 3000;

connectDb(); // DB 접속

app.use(expressLayout);
app.set("view engine", "ejs"); // view engine은 ejs를 사용
app.set("views", "./views"); // 템플릿 파일은 views라는 폴더 안에 저장

app.use(express.static("public")); // 해당 폴더 안에 정적인 파일들이 들어있다고 알림

// 파싱을 위한 코드
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser()) // 미들웨어로 등록

app.use("/", require("./routes/main"));
app.use("/", require("./routes/admin"));

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})