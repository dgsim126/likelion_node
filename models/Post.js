const mongoose= require("mongoose");

const PostSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports= mongoose.model("Post", PostSchema); // PostSchema를 이용하여 Post라는 Model을 만들어라