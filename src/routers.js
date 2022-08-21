const express = require('express');
const post = require('./models/post');

const router = express.Router();


router.post('/post', async (req, res) => {
    res.status(200).json(req.body);
    const {author, title, content} = req.body;
    await post.create({author, title, content});
    console.log(req.body);
});
router.get('/post', async (req, res) => {
    //res.send(req.query.test);
    const posts = await post.find();
    res.json(posts);
    console.log(posts);
    //console.log(req.query);
});
router.get('/post/:id', async (req, res) => {
    const tpost = await post.findById(req.params.id);
    res.json(tpost);
    console.log(tpost);
});
router.put('/post', async (req, res) => {
    //const npost = req.body;
    await post.findByIdAndUpdate(req.body._id,  req.body, {new: true});
    res.json(req.body);
    console.log(req.body);
});

router.delete('/post/:id', async (req, res) => {
    await post.findByIdAndDelete(req.params.id);
    console.log(`post _id:${req.params.id} was deleted`);
});

module. exports = router;
