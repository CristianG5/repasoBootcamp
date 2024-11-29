const {createPostDb} =  require("../controllers/postsController")

getPostsHandlers = (req, res) => {
    res.status(200).send("Posteo")
}

createPostsHandlers = async (req, res) => {
    const {title, body, userId} = req.body

    try {
        const newPost = await createPostDb(body, title, userId)
        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports = {
    getPostsHandlers,
    createPostsHandlers
}