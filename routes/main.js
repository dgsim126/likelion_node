const express= require("express");
const router= express.Router();
const mainLayout= "../views/layouts/main.ejs";
const Post= require("../models/Post"); // 만들어놓은 Post라는 Model 불러오기
const asyncHandler= require("express-async-handler");

router.get(["/", "/home"], asyncHandler(async(req, res)=>{
    const locals = {
        title: "Home"
    };

    const data= await Post.find(); // posts라는 컬렉션에 들어있는 걸 모두 가져옴
    res.render("index", {locals: locals, data, layout: mainLayout});
}))

router.get("/about", (req, res)=>{
    const locals = {
        title: "About"
    }
    res.render("about", {locals: locals, layout: mainLayout});
})

/**
 * 게시물 상세 보기
 * GET /post/:id
 */
router.get("/post/:id", asyncHandler(async (req, res)=>{
    const data= await Post.findOne({_id: req.params.id}); // DB에서 id값에 해당하는 값을 찾아와 data에 넣는다.
    res.render("post", {data, layout: mainLayout}); // 찾아온 data를 post.ejs로 렌더링
})) 


module.exports= router;

// Post.insertMany([ // 임시로 데이터 집어넣기
//     {
//         title: "제목 1",
//         body: "내용 1"
//     },
//     {
//         title: "제목 2",
//         body: "내용 2"
//     },
//     {
//         title: "제목 3",
//         body: "내용 3"
//     },
//     {
//         title: "제목 4",
//         body: "내용 4"
//     },
//     {
//         title: "제목 5",
//         body: "내용 5"
//     }
// ]
// );