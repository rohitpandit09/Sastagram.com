const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({storage : multer.memoryStorage()});

// Creating API for posting a post

app.post('/create-post',upload.single("image"),async (req,res)=>{
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })

    console.log(result);

    return res.status(201).json({
        message : "Post created successfully",
        post
    })
})

// API for fetching all the posts

app.get('/posts', async (req,res)=>{
    const posts = await postModel.find();

    return res.status(200).json({
        message : "Posts fetched successfully",
        posts
    })
})


module.exports = app;